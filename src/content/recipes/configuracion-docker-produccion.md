# Configuración de Docker en Producción: Receta para Contenedores Empresariales Seguros

*Una guía completa para "cocinar" un entorno Docker de producción robusto y seguro. Como preparar un banquete para una gran celebración, cada detalle cuenta para el éxito del evento.*

## Información

- **Tiempo de preparación:** 1.5 horas
- **Tiempo de cocción:** 2 horas  
- **Tiempo total:** 3.5 horas
- **Porciones:** 1 entorno de producción
- **Dificultad:** Avanzado
- **Categoría:** DevOps

## Ingredientes (Requisitos)

- **Servidor Linux** (Ubuntu 22.04 LTS recomendado)
- **Docker Engine** versión 24.0+
- **Docker Compose** versión 2.0+
- **Certificados SSL** para comunicación segura
- **Sistema de monitoreo** (Prometheus/Grafana)
- **Sistema de logs** (ELK Stack o similar)
- **Backup automatizado** configurado
- **Conocimientos avanzados** de Docker y Linux

## Preparación (Pasos Detallados)

### Paso 1: Instalación de Docker Engine
Como preparar la cocina principal, Docker es el corazón de nuestro entorno de producción.

**Comandos esenciales:**
```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Añadir clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Añadir repositorio de Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Paso 2: Configuración de Seguridad
Como sazonar el plato con las especias correctas, la seguridad es fundamental.

**Configuración de daemon.json:**
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "live-restore": true,
  "userland-proxy": false,
  "no-new-privileges": true,
  "seccomp-profile": "/etc/docker/seccomp-profile.json",
  "apparmor-profile": "docker-default"
}
```

### Paso 3: Configuración de Redes
Crear la "infraestructura de comunicación" entre nuestros contenedores.

**Redes personalizadas:**
```bash
# Crear red para aplicaciones
docker network create --driver bridge --subnet=172.20.0.0/16 app-network

# Crear red para base de datos
docker network create --driver bridge --subnet=172.21.0.0/16 db-network

# Crear red para monitoreo
docker network create --driver bridge --subnet=172.22.0.0/16 monitoring-network
```

### Paso 4: Configuración de Volúmenes
Preparar el "almacenamiento" para nuestros datos persistentes.

**Volúmenes nombrados:**
```bash
# Crear volúmenes para datos críticos
docker volume create postgres-data
docker volume create redis-data
docker volume create app-logs
docker volume create ssl-certs
```

### Paso 5: Docker Compose de Producción
La "receta maestra" que orquesta todo nuestro entorno.

**docker-compose.prod.yml:**
```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ssl-certs:/etc/ssl/certs
      - ./nginx.conf:/etc/nginx/nginx.conf
    networks:
      - app-network
    depends_on:
      - app

  app:
    image: myapp:latest
    container_name: production-app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@postgres:5432/mydb
    volumes:
      - app-logs:/app/logs
    networks:
      - app-network
      - db-network
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    container_name: production-db
    restart: unless-stopped
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=secure_password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - db-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 30s
      timeout: 10s
      retries: 3

  redis:
    image: redis:7-alpine
    container_name: production-cache
    restart: unless-stopped
    volumes:
      - redis-data:/data
    networks:
      - app-network
    command: redis-server --appendonly yes --requirepass secure_password

volumes:
  postgres-data:
  redis-data:
  app-logs:
  ssl-certs:

networks:
  app-network:
  db-network:
```

## Consejos del Chef (Best Practices)

### Seguridad
- **Usar imágenes oficiales**: Siempre preferir imágenes oficiales y mantenerlas actualizadas
- **Ejecutar como usuario no-root**: Configurar usuarios específicos en contenedores
- **Limitar recursos**: Establecer límites de CPU y memoria para cada contenedor
- **Escaneo de vulnerabilidades**: Implementar escaneo automático de imágenes

### Optimización
- **Multi-stage builds**: Usar builds multi-etapa para reducir tamaño de imágenes
- **Caché de capas**: Optimizar Dockerfile para aprovechar el caché de capas
- **Health checks**: Implementar verificaciones de salud para todos los servicios
- **Logging centralizado**: Configurar sistema de logs centralizado

### Monitoreo
- **Métricas de contenedores**: Implementar recolección de métricas con Prometheus
- **Alertas automáticas**: Configurar alertas para recursos críticos
- **Dashboards**: Crear dashboards en Grafana para visualización
- **Logs estructurados**: Usar formato JSON para logs estructurados

## Información Nutricional (Beneficios del Setup)

- **Alta disponibilidad**: Configuración preparada para entornos críticos
- **Escalabilidad horizontal**: Fácil escalado de servicios según demanda
- **Seguridad robusta**: Múltiples capas de seguridad implementadas
- **Monitoreo completo**: Visibilidad total del estado del sistema
- **Recuperación rápida**: Procedimientos de backup y restore automatizados

## Troubleshooting Común

### Problema: Contenedor no inicia
**Solución**: Verificar logs con `docker logs container-name` y validar configuración

### Problema: Conexión de red falla
**Solución**: Verificar configuración de redes con `docker network ls` y `docker network inspect`

### Problema: Volúmenes no persisten
**Solución**: Verificar permisos y configuración de volúmenes con `docker volume inspect`

### Problema: Rendimiento lento
**Solución**: Monitorear recursos con `docker stats` y ajustar límites según necesidad

## Próximos Pasos Recomendados

1. **Implementar CI/CD** con GitHub Actions o GitLab CI
2. **Configurar Kubernetes** para orquestación avanzada
3. **Implementar Service Mesh** con Istio para comunicación segura
4. **Configurar Disaster Recovery** con replicación geográfica
5. **Automatizar despliegues** con herramientas como ArgoCD

---

**⚠️ Nota de Seguridad**: Este setup está optimizado para producción pero siempre mantén actualizados todos los componentes y revisa los logs regularmente.

**📧 Soporte**: Para dudas específicas sobre configuración, revisa la documentación oficial de Docker y las mejores prácticas de la industria.
