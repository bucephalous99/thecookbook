import { Clock, Users, ChefHat, ArrowLeft, Terminal, Shield, Database, Container } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CodeBlock from '@/components/ui/CodeBlock'
import Checklist from '@/components/ui/Checklist'
import Tabs from '@/components/ui/Tabs'
import AIWidget from '@/components/ui/AIWidget'

export default function DockerProductionGuidePage() {
  // Datos de la guía técnica
  const guide = {
    id: 'docker-production-guide',
    title: 'Configuración de Docker en Producción: Receta para Contenedores Empresariales Seguros',
    description: 'Una guía completa para "cocinar" un entorno Docker de producción robusto y seguro. Como preparar un banquete para una gran celebración, cada detalle cuenta para el éxito del evento.',
    image: '/images/docker-production.jpg',
    prepTime: '1.5 horas',
    cookTime: '2 horas',
    totalTime: '3.5 horas',
    servings: '1 entorno de producción',
    difficulty: 'Avanzado',
    category: 'DevOps',
    date: '2024-01-21',
    slug: 'configuracion-docker-produccion',
    ingredients: [
      'Servidor Linux (Ubuntu 22.04 LTS recomendado)',
      'Docker Engine versión 24.0+',
      'Docker Compose versión 2.0+',
      'Certificados SSL para comunicación segura',
      'Sistema de monitoreo (Prometheus/Grafana)',
      'Sistema de logs (ELK Stack o similar)',
      'Backup automatizado configurado',
      'Conocimientos avanzados de Docker y Linux'
    ],
    steps: [
      {
        number: 1,
        title: 'Instalación de Docker Engine',
        description: 'Como preparar la cocina principal, Docker es el corazón de nuestro entorno de producción.',
        code: `# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Añadir clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Añadir repositorio de Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`,
        tips: ['Usar repositorio oficial de Docker', 'Instalar plugins adicionales', 'Verificar instalación con docker --version']
      },
      {
        number: 2,
        title: 'Configuración de Seguridad',
        description: 'Como sazonar el plato con las especias correctas, la seguridad es fundamental.',
        code: `# Crear archivo daemon.json
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json > /dev/null <<EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "live-restore": true,
  "userland-proxy": false,
  "no-new-privileges": true
}
EOF

# Reiniciar Docker
sudo systemctl restart docker`,
        tips: ['Configurar rotación de logs', 'Habilitar live-restore', 'Deshabilitar privilegios innecesarios']
      },
      {
        number: 3,
        title: 'Configuración de Redes',
        description: 'Crear la "infraestructura de comunicación" entre nuestros contenedores.',
        code: `# Crear red para aplicaciones
docker network create --driver bridge --subnet=172.20.0.0/16 app-network

# Crear red para base de datos
docker network create --driver bridge --subnet=172.21.0.0/16 db-network

# Crear red para monitoreo
docker network create --driver bridge --subnet=172.22.0.0/16 monitoring-network

# Verificar redes creadas
docker network ls`,
        tips: ['Usar subnets específicas', 'Separar redes por función', 'Documentar configuración de red']
      },
      {
        number: 4,
        title: 'Configuración de Volúmenes',
        description: 'Preparar el "almacenamiento" para nuestros datos persistentes.',
        code: `# Crear volúmenes para datos críticos
docker volume create postgres-data
docker volume create redis-data
docker volume create app-logs
docker volume create ssl-certs

# Verificar volúmenes creados
docker volume ls

# Inspeccionar volumen específico
docker volume inspect postgres-data`,
        tips: ['Usar volúmenes nombrados', 'Separar datos por servicio', 'Implementar backup de volúmenes']
      },
      {
        number: 5,
        title: 'Docker Compose de Producción',
        description: 'La "receta maestra" que orquesta todo nuestro entorno.',
        code: `version: '3.8'

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
      - redis`,
        tips: ['Usar restart policies', 'Configurar health checks', 'Separar redes por función']
      }
    ],
    tips: [
      'Usar imágenes oficiales: Siempre preferir imágenes oficiales y mantenerlas actualizadas',
      'Ejecutar como usuario no-root: Configurar usuarios específicos en contenedores',
      'Limitar recursos: Establecer límites de CPU y memoria para cada contenedor',
      'Escaneo de vulnerabilidades: Implementar escaneo automático de imágenes',
      'Multi-stage builds: Usar builds multi-etapa para reducir tamaño de imágenes',
      'Caché de capas: Optimizar Dockerfile para aprovechar el caché de capas',
      'Health checks: Implementar verificaciones de salud para todos los servicios',
      'Logging centralizado: Configurar sistema de logs centralizado'
    ],
    checklist: [
      { id: 'docker-installed', text: 'Docker Engine instalado y configurado' },
      { id: 'security-configured', text: 'Configuración de seguridad aplicada' },
      { id: 'networks-created', text: 'Redes personalizadas creadas' },
      { id: 'volumes-configured', text: 'Volúmenes persistentes configurados' },
      { id: 'compose-ready', text: 'Docker Compose de producción listo' },
      { id: 'monitoring-setup', text: 'Sistema de monitoreo configurado' },
      { id: 'backup-configured', text: 'Backup automatizado configurado' },
      { id: 'ssl-certificates', text: 'Certificados SSL configurados' },
      { id: 'health-checks', text: 'Health checks implementados' },
      { id: 'logging-configured', text: 'Sistema de logs centralizado configurado' }
    ]
  }

  const troubleshootingTabs = [
    {
      id: 'common-issues',
      label: 'Problemas Comunes',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Contenedor no inicia</h4>
            <p className="text-red-700 mb-2">Verificar logs y configuración</p>
            <CodeBlock code="docker logs container-name" language="bash" />
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Conexión de red falla</h4>
            <p className="text-yellow-700 mb-2">Verificar configuración de redes</p>
            <CodeBlock code="docker network ls && docker network inspect network-name" language="bash" />
          </div>
        </div>
      )
    },
    {
      id: 'monitoring',
      label: 'Monitoreo',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Estado de Contenedores</h4>
            <CodeBlock code="docker ps -a" language="bash" />
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Uso de Recursos</h4>
            <CodeBlock code="docker stats" language="bash" />
          </div>
        </div>
      )
    },
    {
      id: 'backup',
      label: 'Backup y Restore',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Backup de Volúmenes</h4>
            <CodeBlock code="docker run --rm -v volume-name:/data -v $(pwd):/backup alpine tar czf /backup/backup.tar.gz -C /data ." language="bash" />
          </div>
          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Restore de Volúmenes</h4>
            <CodeBlock code="docker run --rm -v volume-name:/data -v $(pwd):/backup alpine tar xzf /backup/backup.tar.gz -C /data" language="bash" />
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="architect-container py-4">
        <Link href="/recetas" className="inline-flex items-center space-x-2 text-neutral-600 hover:text-architect-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Recetas</span>
        </Link>
      </div>

      <div className="architect-container">
        <div className="max-w-4xl mx-auto">
          {/* Header de la guía */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-architect-accent/10 px-4 py-2 rounded-full mb-6">
              <Container className="w-4 h-4 text-architect-accent" />
              <span className="text-sm font-medium text-architect-accent uppercase tracking-wide">
                {guide.category}
              </span>
            </div>
            
            <h1 className="text-hero mb-6">{guide.title}</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {guide.description}
            </p>

            {/* Meta información */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{guide.totalTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{guide.servings}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="architect-badge">{guide.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative h-96 bg-neutral-100 rounded-lg overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-architect-accent/20 to-architect-accent/5 flex items-center justify-center">
              <div className="text-center">
                <Container className="w-16 h-16 text-architect-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-700">Guía Técnica Completa</h3>
                <p className="text-neutral-600">Configuración paso a paso de Docker en producción</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Ingredientes */}
              <section>
                <h2 className="text-display mb-6">Ingredientes (Requisitos)</h2>
                <div className="architect-card p-6">
                  <ul className="space-y-3">
                    {guide.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-architect-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Pasos */}
              <section>
                <h2 className="text-display mb-6">Preparación (Pasos Detallados)</h2>
                <div className="space-y-8">
                  {guide.steps.map((step) => (
                    <div key={step.number} className="architect-card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-architect-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-title mb-3">{step.title}</h3>
                          <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                          <CodeBlock code={step.code} language="bash" title="Comandos" />
                          {step.tips && (
                            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">💡 Consejos:</h4>
                              <ul className="space-y-1">
                                {step.tips.map((tip, index) => (
                                  <li key={index} className="text-blue-700 text-sm">• {tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Consejos del Chef */}
              <section>
                <h2 className="text-display mb-6">Consejos del Chef (Best Practices)</h2>
                <div className="architect-card p-6 bg-gradient-to-r from-architect-accent/5 to-architect-accent/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-title mb-4 flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-architect-accent" />
                        <span>Seguridad</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {guide.tips.slice(0, 4).map((tip, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-architect-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-neutral-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-title mb-4 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-architect-accent" />
                        <span>Optimización</span>
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {guide.tips.slice(4).map((tip, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-architect-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-neutral-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting */}
              <section>
                <h2 className="text-display mb-6">Troubleshooting y Mantenimiento</h2>
                <Tabs tabs={troubleshootingTabs} />
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Checklist */}
                <Checklist 
                  items={guide.checklist}
                  title="Checklist de Verificación"
                />

                {/* Información técnica */}
                <div className="architect-card p-6">
                  <h3 className="text-title mb-4">Información Técnica</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Complejidad</span>
                      <span className="font-medium">Avanzada</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Costo estimado</span>
                      <span className="font-medium">$50-200/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Tiempo total</span>
                      <span className="font-medium">3.5 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Nivel técnico</span>
                      <span className="font-medium">Avanzado</span>
                    </div>
                  </div>
                </div>

                {/* Compartir */}
                <div className="architect-card p-6">
                  <h3 className="text-title mb-4">Compartir</h3>
                  <div className="flex space-x-3">
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      LinkedIn
                    </button>
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      Twitter
                    </button>
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget de IA especializado */}
      <AIWidget 
        recipeTitle={guide.title}
        recipeIngredients={guide.ingredients}
        recipeSteps={guide.steps.map(step => step.description)}
      />
    </div>
  )
}
