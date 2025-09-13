import { Clock, Users, ChefHat, ArrowLeft, Terminal, Shield, Database } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CodeBlock from '@/components/ui/CodeBlock'
import Checklist from '@/components/ui/Checklist'
import Tabs from '@/components/ui/Tabs'
import AIWidget from '@/components/ui/AIWidget'

interface TechnicalGuidePageProps {
  params: {
    slug: string
  }
}

export default function TechnicalGuidePage({ params }: TechnicalGuidePageProps) {
  // Datos de la guía técnica
  const guide = {
    id: 'n8n-aws-guide',
    title: 'Configuración de n8n en AWS: Receta para Automatización Empresarial Segura',
    description: 'Una guía completa para "cocinar" un servidor de automatización empresarial seguro en AWS usando n8n. Como preparar un plato gourmet, cada paso es crucial para el resultado final.',
    image: '/images/n8n-aws-setup.jpg',
    prepTime: '2 horas',
    cookTime: '1 hora',
    totalTime: '3 horas',
    servings: '1 servidor de automatización',
    difficulty: 'Avanzado',
    category: 'DevOps',
    date: '2024-01-20',
    slug: 'configuracion-n8n-aws-seguridad-empresarial',
    ingredients: [
      'Servidor AWS EC2 (Ubuntu Server 22.04 LTS recomendado)',
      'Dominio propio con acceso a configuración DNS',
      'Clave SSH para acceso seguro',
      'Docker y Docker Compose (instalados en el servidor)',
      'Certificado SSL (Let\'s Encrypt gratuito)',
      'Base de datos PostgreSQL (contenedor Docker)',
      'Nginx como proxy reverso',
      'Conocimientos básicos de Linux y AWS'
    ],
    steps: [
      {
        number: 1,
        title: 'Lanzamiento de Instancia EC2',
        description: 'Como seleccionar los ingredientes frescos, elegir la instancia correcta es fundamental.',
        code: `# Acceder a AWS Console → EC2 Dashboard
# Launch Instance → Seleccionar Ubuntu Server 22.04 LTS
# Elegir tipo de instancia según necesidades
# Configure Storage → Aumentar a 20GB mínimo
# Enable encryption → Usar default AWS KMS key`,
        tips: ['Usar t3.medium para producción', 'Habilitar encriptación en almacenamiento', 'Configurar grupos de seguridad antes de lanzar']
      },
      {
        number: 2,
        title: 'Configuración de Grupos de Seguridad',
        description: 'Como preparar la cocina antes de cocinar, la seguridad es la base de todo.',
        code: `# Reglas de entrada necesarias:
# SSH (puerto 22): Solo desde tu IP pública
# HTTP (puerto 80): Para redirección HTTPS
# HTTPS (puerto 443): Acceso web seguro
# Puerto 5678: Solo temporalmente para configuración`,
        tips: ['Nunca usar 0.0.0.0/0 para SSH', 'Restringir acceso por IP específica', 'Documentar todas las reglas']
      },
      {
        number: 3,
        title: 'IP Elástica y Configuración DNS',
        description: 'Asignar una dirección fija a tu "restaurante" de automatización.',
        code: `# Obtener tu IP pública
curl ifconfig.me

# Asignar Elastic IP (via AWS Console)
# EC2 → Elastic IPs → Allocate Elastic IP address
# Actions → Associate Elastic IP address`,
        tips: ['Usar Elastic IP para dirección fija', 'Configurar DNS antes de SSL', 'Verificar propagación DNS']
      },
      {
        number: 4,
        title: 'Configuración Inicial del Servidor',
        description: 'Preparar el "ambiente de cocina" con todas las herramientas necesarias.',
        code: `# Conectarse a la instancia
ssh -i "tu-clave.pem" ubuntu@tu-elastic-ip

# Actualizar repositorios
sudo apt update && sudo apt upgrade -y

# Instalar dependencias básicas
sudo apt install -y curl wget git unzip software-properties-common`,
        tips: ['Siempre actualizar antes de instalar', 'Instalar herramientas esenciales', 'Verificar conectividad de red']
      },
      {
        number: 5,
        title: 'Instalación de Docker y Docker Compose',
        description: 'Instalar las "ollas y utensilios" principales para nuestro plato de automatización.',
        code: `# Añadir repositorio oficial de Docker
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
docker-compose --version`,
        tips: ['Usar repositorio oficial de Docker', 'Verificar versiones instaladas', 'Configurar usuario en grupo docker']
      }
    ],
    tips: [
      'Nunca usar 0.0.0.0/0 para SSH: Siempre restringir a IPs específicas',
      'Rotar claves regularmente: Cambiar claves SSH y contraseñas periódicamente',
      'Monitorear logs: Revisar logs de acceso y errores regularmente',
      'Actualizar componentes: Mantener Docker, n8n y el sistema operativo actualizados',
      'Usar instancias apropiadas: Escalar según el uso real',
      'Configurar backups automáticos: Implementar estrategia de respaldo',
      'Monitorear recursos: Usar CloudWatch para supervisar CPU, memoria y red',
      'Optimizar base de datos: Configurar PostgreSQL según las necesidades'
    ],
    checklist: [
      { id: 'ec2-launched', text: 'Instancia EC2 lanzada con configuración correcta' },
      { id: 'security-groups', text: 'Grupos de seguridad configurados apropiadamente' },
      { id: 'elastic-ip', text: 'IP elástica asignada y DNS configurado' },
      { id: 'docker-installed', text: 'Docker y Docker Compose instalados' },
      { id: 'user-created', text: 'Usuario no-root creado para n8n' },
      { id: 'n8n-configured', text: 'n8n configurado con Docker Compose' },
      { id: 'nginx-installed', text: 'Nginx instalado y configurado' },
      { id: 'ssl-configured', text: 'Certificado SSL configurado con Let\'s Encrypt' },
      { id: 'firewall-enabled', text: 'UFW configurado y habilitado' },
      { id: 'services-running', text: 'Todos los servicios funcionando correctamente' }
    ]
  }

  const troubleshootingTabs = [
    {
      id: 'common-issues',
      label: 'Problemas Comunes',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">n8n no responde</h4>
            <p className="text-red-700 mb-2">Verificar logs y reiniciar servicios</p>
            <CodeBlock code="docker-compose logs n8n" language="bash" />
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Certificado SSL no funciona</h4>
            <p className="text-yellow-700 mb-2">Verificar DNS y renovar certificado</p>
            <CodeBlock code="sudo certbot renew --force-renewal" language="bash" />
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
            <h4 className="font-semibold text-blue-800 mb-2">Health Check</h4>
            <CodeBlock code="curl -f https://n8n.tudominio.com/healthz" language="bash" />
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Verificar Servicios</h4>
            <CodeBlock code="docker-compose ps" language="bash" />
          </div>
        </div>
      )
    },
    {
      id: 'backup',
      label: 'Backup',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Backup de Datos</h4>
            <CodeBlock code="docker-compose exec postgres pg_dump -U n8n_user n8n > backup.sql" language="bash" />
          </div>
          <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Backup de Configuración</h4>
            <CodeBlock code="tar -czf n8n-config-backup.tar.gz ~/n8n/" language="bash" />
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
              <Terminal className="w-4 h-4 text-architect-accent" />
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
                <Terminal className="w-16 h-16 text-architect-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-700">Guía Técnica Completa</h3>
                <p className="text-neutral-600">Configuración paso a paso de n8n en AWS</p>
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
                      <span className="font-medium">$20-50/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Tiempo total</span>
                      <span className="font-medium">3 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Nivel técnico</span>
                      <span className="font-medium">Intermedio+</span>
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
