# Configuración de n8n en AWS: Receta para Automatización Empresarial Segura

*Una guía completa para "cocinar" un servidor de automatización empresarial seguro en AWS usando n8n. Como preparar un plato gourmet, cada paso es crucial para el resultado final.*

## Información

- **Tiempo de preparación:** 2 horas
- **Tiempo de cocción:** 1 hora  
- **Tiempo total:** 3 horas
- **Porciones:** 1 servidor de automatización
- **Dificultad:** Avanzado
- **Categoría:** DevOps

## Ingredientes (Requisitos)

- **Servidor AWS EC2** (Ubuntu Server 22.04 LTS recomendado)
- **Dominio propio** con acceso a configuración DNS
- **Clave SSH** para acceso seguro
- **Docker y Docker Compose** (instalados en el servidor)
- **Certificado SSL** (Let's Encrypt gratuito)
- **Base de datos PostgreSQL** (contenedor Docker)
- **Nginx** como proxy reverso
- **Conocimientos básicos** de Linux y AWS

## Preparación (Pasos Detallados)

### Paso 1: Lanzamiento de Instancia EC2
Como seleccionar los ingredientes frescos, elegir la instancia correcta es fundamental.

**Ingredientes necesarios:**
- AMI: Ubuntu Server 22.04 LTS
- Tipo: t3.medium (2 vCPU, 4GB RAM) para producción
- Almacenamiento: 20GB mínimo con encriptación habilitada

**Instrucciones:**
1. Acceder a AWS Console → EC2 Dashboard
2. Launch Instance → Seleccionar Ubuntu Server 22.04 LTS
3. Elegir tipo de instancia según necesidades
4. Configure Storage → Aumentar a 20GB mínimo
5. Enable encryption → Usar default AWS KMS key

### Paso 2: Configuración de Grupos de Seguridad
Como preparar la cocina antes de cocinar, la seguridad es la base de todo.

**Reglas de entrada necesarias:**
- SSH (puerto 22): Solo desde tu IP pública
- HTTP (puerto 80): Para redirección HTTPS
- HTTPS (puerto 443): Acceso web seguro
- Puerto 5678: Solo temporalmente para configuración

### Paso 3: IP Elástica y Configuración DNS
Asignar una dirección fija a tu "restaurante" de automatización.

**Comandos esenciales:**
```bash
# Obtener tu IP pública
curl ifconfig.me

# Asignar Elastic IP (via AWS Console)
# EC2 → Elastic IPs → Allocate Elastic IP address
# Actions → Associate Elastic IP address
```

### Paso 4: Configuración Inicial del Servidor
Preparar el "ambiente de cocina" con todas las herramientas necesarias.

**Actualización del sistema:**
```bash
# Conectarse a la instancia
ssh -i "tu-clave.pem" ubuntu@tu-elastic-ip

# Actualizar repositorios
sudo apt update && sudo apt upgrade -y

# Instalar dependencias básicas
sudo apt install -y curl wget git unzip software-properties-common
```

### Paso 5: Instalación de Docker y Docker Compose
Instalar las "ollas y utensilios" principales para nuestro plato de automatización.

```bash
# Añadir repositorio oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verificar instalaciones
docker --version
docker-compose --version
```

### Paso 6: Crear Usuario No-Root Seguro
Como tener un chef especializado, crear un usuario dedicado para n8n.

```bash
# Crear usuario para n8n
sudo adduser n8nuser

# Añadir al grupo docker
sudo usermod -aG docker n8nuser

# Configurar SSH para el nuevo usuario
sudo mkdir /home/n8nuser/.ssh
sudo cp /home/ubuntu/.ssh/authorized_keys /home/n8nuser/.ssh/
sudo chown -R n8nuser:n8nuser /home/n8nuser/.ssh
sudo chmod 700 /home/n8nuser/.ssh
sudo chmod 600 /home/n8nuser/.ssh/authorized_keys
```

### Paso 7: Instalación y Configuración de n8n
El plato principal: configurar n8n con todos los ingredientes necesarios.

**Crear estructura de directorios:**
```bash
# Cambiar a usuario n8nuser
sudo su - n8nuser

# Crear estructura de directorios
mkdir -p ~/n8n/{data,config,ssl}
cd ~/n8n
```

**Crear Docker Compose:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - n8n_network

  n8n:
    image: n8nio/n8n:latest
    restart: unless-stopped
    environment:
      # Base configuration
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_PORT: 5432
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n_user
      DB_POSTGRESDB_PASSWORD: ${DB_PASSWORD}
      
      # n8n configuration
      N8N_HOST: ${N8N_HOST}
      N8N_PORT: 5678
      N8N_PROTOCOL: https
      WEBHOOK_URL: https://${N8N_HOST}/
      
      # Security
      N8N_ENCRYPTION_KEY: ${N8N_ENCRYPTION_KEY}
      
      # User management
      N8N_USER_MANAGEMENT_DISABLED: false
      
      # Misc
      GENERIC_TIMEZONE: America/Panama
      N8N_LOG_LEVEL: info
      N8N_METRICS: true
      
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres
    networks:
      - n8n_network

volumes:
  postgres_data:
  n8n_data:

networks:
  n8n_network:
    driver: bridge
```

**Crear archivo de variables de entorno:**
```bash
# Generar clave de encriptación segura
ENCRYPTION_KEY=$(openssl rand -hex 32)

# Crear archivo .env
cat > .env << EOF
DB_PASSWORD=$(openssl rand -base64 32)
N8N_HOST=n8n.tudominio.com
N8N_ENCRYPTION_KEY=$ENCRYPTION_KEY
EOF

# Proteger archivo .env
chmod 600 .env
```

### Paso 8: Configuración de Seguridad
Como sazonar el plato, la seguridad le da el sabor final a nuestra configuración.

**Configurar UFW (Firewall):**
```bash
# Volver a usuario ubuntu para configuración del sistema
exit

# Instalar UFW
sudo apt install -y ufw

# Configuración básica de UFW
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Permitir SSH (CRÍTICO: hacer esto antes de enable)
sudo ufw allow from TU-IP-PUBLICA to any port 22

# Permitir tráfico web
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Permitir n8n port (temporal)
sudo ufw allow from TU-IP-PUBLICA to any port 5678

# Habilitar UFW
sudo ufw --force enable
```

### Paso 9: Instalar y Configurar Nginx
El "mesero" que presenta nuestro plato de automatización al mundo.

```bash
# Instalar Nginx
sudo apt install -y nginx

# Crear configuración para n8n
sudo cat > /etc/nginx/sites-available/n8n << 'EOF'
server {
    listen 80;
    server_name n8n.tudominio.com;
    
    # Redirect all HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name n8n.tudominio.com;

    # SSL Configuration (will be updated by Certbot)
    ssl_certificate /etc/letsencrypt/live/n8n.tudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/n8n.tudominio.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Proxy configuration
    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
        proxy_read_timeout 300;
        send_timeout 300;
    }
}
EOF

# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Verificar configuración
sudo nginx -t
```

### Paso 10: Configurar HTTPS con Let's Encrypt
El "certificado de calidad" que garantiza la seguridad de nuestro servicio.

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d n8n.tudominio.com --email tu-email@tudominio.com --agree-tos --no-eff-email

# Verificar renovación automática
sudo certbot renew --dry-run

# Configurar renovación automática
sudo crontab -e
# Añadir línea: 0 12 * * * /usr/bin/certbot renew --quiet && systemctl reload nginx
```

### Paso 11: Iniciar Servicios y Verificación Final
Servir nuestro plato de automatización al mundo.

```bash
# Cambiar a usuario n8nuser
sudo su - n8nuser
cd ~/n8n

# Iniciar servicios
docker-compose up -d

# Verificar que los contenedores estén corriendo
docker-compose ps

# Ver logs si hay problemas
docker-compose logs -f n8n
```

## Consejos del Chef (Best Practices)

### Seguridad
- **Nunca usar 0.0.0.0/0 para SSH**: Siempre restringir a IPs específicas
- **Rotar claves regularmente**: Cambiar claves SSH y contraseñas periódicamente
- **Monitorear logs**: Revisar logs de acceso y errores regularmente
- **Actualizar componentes**: Mantener Docker, n8n y el sistema operativo actualizados

### Optimización
- **Usar instancias apropiadas**: Escalar según el uso real
- **Configurar backups automáticos**: Implementar estrategia de respaldo
- **Monitorear recursos**: Usar CloudWatch para supervisar CPU, memoria y red
- **Optimizar base de datos**: Configurar PostgreSQL según las necesidades

### Mantenimiento
- **Backups regulares**: Automatizar respaldos de datos y configuración
- **Logs rotativos**: Configurar rotación de logs para evitar llenar el disco
- **Health checks**: Implementar verificaciones de salud del servicio
- **Documentación**: Mantener documentación actualizada de la configuración

## Información Nutricional (Beneficios del Setup)

- **Seguridad empresarial**: Configuración robusta con múltiples capas de seguridad
- **Escalabilidad**: Fácil escalado horizontal y vertical según necesidades
- **Alta disponibilidad**: Configuración preparada para entornos de producción
- **Mantenibilidad**: Estructura clara y documentada para facilitar el mantenimiento
- **Costo-efectividad**: Uso eficiente de recursos AWS con optimización de costos

## Troubleshooting Común

### Problema: n8n no responde
**Solución**: Verificar logs con `docker-compose logs n8n` y reiniciar servicios

### Problema: Certificado SSL no funciona
**Solución**: Verificar DNS y ejecutar `sudo certbot renew --force-renewal`

### Problema: Error de conexión a base de datos
**Solución**: Verificar que PostgreSQL esté corriendo y las credenciales sean correctas

### Problema: Puerto 5678 no accesible
**Solución**: Verificar configuración de UFW y grupos de seguridad de AWS

## Próximos Pasos Recomendados

1. **Configurar alertas de monitoreo** con CloudWatch
2. **Implementar WAF** para protección adicional
3. **Configurar Auto Scaling Group** para alta disponibilidad
4. **Implementar RDS** para base de datos gestionada
5. **Configurar VPC dedicada** para mejor aislamiento

---

**⚠️ Nota de Seguridad**: Este setup está optimizado para producción pero siempre mantén actualizados todos los componentes y revisa los logs regularmente.

**📧 Soporte**: Para dudas específicas sobre configuración, revisa la documentación oficial de n8n y AWS Best Practices.
