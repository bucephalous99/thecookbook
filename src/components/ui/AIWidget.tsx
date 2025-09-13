'use client'

import { useState } from 'react'
import { MessageCircle, Send, Bot, X } from 'lucide-react'

interface AIWidgetProps {
  recipeTitle?: string
  recipeIngredients?: string[]
  recipeSteps?: string[]
}

export default function AIWidget({ recipeTitle, recipeIngredients, recipeSteps }: AIWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: recipeTitle?.toLowerCase().includes('n8n') || recipeTitle?.toLowerCase().includes('aws') || recipeTitle?.toLowerCase().includes('docker')
        ? `¡Hola! Soy tu asistente DevOps. Puedo ayudarte con dudas sobre ${recipeTitle || 'esta guía técnica'}, configuración de n8n, AWS, Docker, seguridad o cualquier pregunta técnica que tengas. ¿En qué puedo ayudarte?`
        : `¡Hola! Soy tu asistente culinario. Puedo ayudarte con dudas sobre ${recipeTitle || 'esta receta'}, sustituciones de ingredientes, técnicas de cocina o cualquier pregunta que tengas. ¿En qué puedo ayudarte?`
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simular respuesta de IA (en producción sería una llamada real a la API)
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(inputMessage, recipeTitle, recipeIngredients)
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const generateAIResponse = (question: string, title?: string, ingredients?: string[]) => {
    const lowerQuestion = question.toLowerCase()
    
    // Respuestas específicas para guías técnicas/DevOps
    if (title?.toLowerCase().includes('n8n') || title?.toLowerCase().includes('aws') || title?.toLowerCase().includes('docker')) {
      if (lowerQuestion.includes('puerto') || lowerQuestion.includes('port')) {
        return "Para cambiar el puerto de n8n, modifica la variable N8N_PORT en tu archivo .env y reinicia el contenedor con 'docker-compose restart n8n'. El puerto por defecto es 5678."
      }
      
      if (lowerQuestion.includes('ssl') || lowerQuestion.includes('certificado') || lowerQuestion.includes('https')) {
        return "Si el certificado SSL falla, verifica que el DNS esté apuntando correctamente a tu servidor. Ejecuta 'sudo certbot renew --force-renewal' para renovar el certificado."
      }
      
      if (lowerQuestion.includes('rendimiento') || lowerQuestion.includes('performance') || lowerQuestion.includes('optimizar')) {
        return "Para optimizar el rendimiento: 1) Usa instancias con más CPU/RAM según tu carga, 2) Configura PostgreSQL con parámetros optimizados, 3) Implementa caching con Redis, 4) Monitorea recursos con CloudWatch."
      }
      
      if (lowerQuestion.includes('backup') || lowerQuestion.includes('respaldo')) {
        return "Para backups: 1) Backup de BD: 'docker-compose exec postgres pg_dump -U n8n_user n8n > backup.sql', 2) Backup de configuración: 'tar -czf n8n-config.tar.gz ~/n8n/', 3) Automatiza con cron jobs."
      }
      
      if (lowerQuestion.includes('error') || lowerQuestion.includes('problema') || lowerQuestion.includes('falla')) {
        return "Para diagnosticar problemas: 1) Revisa logs con 'docker-compose logs n8n', 2) Verifica estado de servicios con 'docker-compose ps', 3) Comprueba conectividad de red, 4) Valida configuración de DNS y SSL."
      }
      
      if (lowerQuestion.includes('seguridad') || lowerQuestion.includes('security')) {
        return "Mejores prácticas de seguridad: 1) Usa UFW para firewall, 2) Restringe SSH por IP específica, 3) Mantén actualizados Docker y n8n, 4) Implementa fail2ban, 5) Usa certificados SSL válidos, 6) Monitorea logs de acceso."
      }
      
      if (lowerQuestion.includes('escalar') || lowerQuestion.includes('escalabilidad')) {
        return "Para escalar n8n: 1) Usa Auto Scaling Groups en AWS, 2) Implementa load balancer, 3) Usa RDS para base de datos gestionada, 4) Considera Kubernetes para orquestación, 5) Implementa caching distribuido."
      }
      
      // Respuestas específicas para Docker
      if (title?.toLowerCase().includes('docker')) {
        if (lowerQuestion.includes('contenedor') || lowerQuestion.includes('container')) {
          return "Para gestionar contenedores: 1) Usa 'docker ps' para ver contenedores activos, 2) 'docker logs container-name' para ver logs, 3) 'docker exec -it container-name bash' para acceder al contenedor, 4) 'docker restart container-name' para reiniciar."
        }
        
        if (lowerQuestion.includes('volumen') || lowerQuestion.includes('volume')) {
          return "Para gestionar volúmenes: 1) 'docker volume ls' para listar volúmenes, 2) 'docker volume create volume-name' para crear, 3) 'docker volume inspect volume-name' para detalles, 4) Usa volúmenes nombrados para persistencia de datos."
        }
        
        if (lowerQuestion.includes('red') || lowerQuestion.includes('network')) {
          return "Para gestionar redes: 1) 'docker network ls' para listar redes, 2) 'docker network create network-name' para crear, 3) 'docker network inspect network-name' para detalles, 4) Separa redes por función (app, db, monitoring)."
        }
        
        if (lowerQuestion.includes('imagen') || lowerQuestion.includes('image')) {
          return "Para gestionar imágenes: 1) 'docker images' para listar imágenes, 2) 'docker pull image-name' para descargar, 3) 'docker build -t image-name .' para construir, 4) Usa imágenes oficiales y mantén actualizadas."
        }
        
        if (lowerQuestion.includes('compose') || lowerQuestion.includes('docker-compose')) {
          return "Para Docker Compose: 1) 'docker-compose up -d' para iniciar servicios, 2) 'docker-compose down' para detener, 3) 'docker-compose logs -f' para ver logs, 4) 'docker-compose ps' para estado de servicios."
        }
      }
    }
    
    // Respuestas generales para recetas culinarias
    if (lowerQuestion.includes('sustituto') || lowerQuestion.includes('reemplazar')) {
      return "Puedo ayudarte con sustituciones. Por ejemplo, si no tienes guanciale para la carbonara, puedes usar panceta o tocino. ¿Qué ingrediente específico necesitas reemplazar?"
    }
    
    if (lowerQuestion.includes('tiempo') || lowerQuestion.includes('cuánto')) {
      return "El tiempo de cocción puede variar según tu estufa y el tamaño de los ingredientes. Te recomiendo probar la textura cada pocos minutos para asegurar el punto perfecto."
    }
    
    if (lowerQuestion.includes('técnica') || lowerQuestion.includes('cómo')) {
      return "Para técnicas específicas, te recomiendo mantener el fuego medio-alto para sellar los sabores y luego reducir a fuego medio para cocinar uniformemente."
    }
    
    return "Excelente pregunta. Basándome en esta receta, te recomiendo seguir estos pasos cuidadosamente y ajustar los tiempos según tu experiencia. ¿Hay algo específico que te gustaría saber más?"
  }

  const quickQuestions = title?.toLowerCase().includes('n8n') || title?.toLowerCase().includes('aws') || title?.toLowerCase().includes('docker')
    ? title?.toLowerCase().includes('docker')
      ? [
          "¿Cómo gestiono contenedores?",
          "¿Cómo configuro volúmenes?",
          "¿Cómo creo redes?",
          "¿Cómo uso Docker Compose?"
        ]
      : [
          "¿Cómo cambio el puerto de n8n?",
          "¿Qué hacer si SSL falla?",
          "¿Cómo optimizo el rendimiento?",
          "¿Cómo configuro backups?"
        ]
    : [
        "¿Cómo sé si está listo?",
        "¿Puedo sustituir algún ingrediente?",
        "¿Qué temperatura usar?",
        "¿Cuánto tiempo tarda?"
      ]

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-architect-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          aria-label="Abrir asistente de IA"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Widget de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-neutral-200 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-architect-accent rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  {title?.toLowerCase().includes('n8n') || title?.toLowerCase().includes('aws') || title?.toLowerCase().includes('docker')
                    ? 'Asistente DevOps' 
                    : 'Asistente Culinario'
                  }
                </h3>
                <p className="text-xs text-neutral-500">
                  {title?.toLowerCase().includes('n8n') || title?.toLowerCase().includes('aws') || title?.toLowerCase().includes('docker')
                    ? 'IA especializada en automatización'
                    : 'IA especializada en cocina'
                  }
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-neutral-100 rounded"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-architect-accent text-white'
                      : 'bg-neutral-100 text-neutral-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preguntas rápidas */}
          <div className="p-4 border-t border-neutral-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="text-xs bg-neutral-50 hover:bg-neutral-100 p-2 rounded text-left transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Pregunta sobre la receta..."
                className="flex-1 architect-input text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="architect-button p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
