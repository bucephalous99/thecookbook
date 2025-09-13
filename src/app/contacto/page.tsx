import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="architect-container">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-hero mb-6">Contacto</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes alguna pregunta sobre las recetas? ¿Quieres colaborar? ¿O simplemente 
            quieres saludar? Me encantaría escucharte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-display mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-title mb-2">Email</h3>
                    <p className="text-neutral-600">hola@cookbook.com</p>
                    <p className="text-sm text-neutral-500">Respondo en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-title mb-2">Teléfono</h3>
                    <p className="text-neutral-600">+34 123 456 789</p>
                    <p className="text-sm text-neutral-500">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-title mb-2">Ubicación</h3>
                    <p className="text-neutral-600">Madrid, España</p>
                    <p className="text-sm text-neutral-500">Disponible para eventos locales</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-title mb-2">Horario</h3>
                    <p className="text-neutral-600">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-sm text-neutral-500">Fines de semana: Solo emergencias</p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mt-12">
                <h3 className="text-title mb-6">Sígueme en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-neutral-100 hover:bg-architect-accent hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm font-bold">IG</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-neutral-100 hover:bg-architect-accent hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm font-bold">YT</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-neutral-100 hover:bg-architect-accent hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm font-bold">TW</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-neutral-100 hover:bg-architect-accent hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-sm font-bold">FB</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <div className="architect-card p-8">
                <h2 className="text-display mb-6">Envíame un Mensaje</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        className="architect-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="architect-input"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Asunto *
                    </label>
                    <select className="architect-input">
                      <option value="">Selecciona un asunto</option>
                      <option value="recipe-question">Pregunta sobre receta</option>
                      <option value="collaboration">Colaboración</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="architect-input resize-none"
                      placeholder="Cuéntame qué necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="architect-button w-full text-lg py-4"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-display text-center mb-12">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="architect-card p-6">
                <h3 className="text-title mb-3">¿Con qué frecuencia publicas nuevas recetas?</h3>
                <p className="text-neutral-600">
                  Publico una nueva receta cada semana, generalmente los domingos. 
                  También comparto consejos y técnicas adicionales en mis redes sociales.
                </p>
              </div>

              <div className="architect-card p-6">
                <h3 className="text-title mb-3">¿Puedo sugerir una receta?</h3>
                <p className="text-neutral-600">
                  ¡Por supuesto! Me encanta recibir sugerencias de mis seguidores. 
                  Envía tu idea a través del formulario de contacto y la consideraré para futuras publicaciones.
                </p>
              </div>

              <div className="architect-card p-6">
                <h3 className="text-title mb-3">¿Ofreces clases de cocina?</h3>
                <p className="text-neutral-600">
                  Sí, ocasionalmente organizo clases presenciales en Madrid y también 
                  clases virtuales. Mantente atento a mis redes sociales para las próximas fechas.
                </p>
              </div>

              <div className="architect-card p-6">
                <h3 className="text-title mb-3">¿Cómo puedo colaborar contigo?</h3>
                <p className="text-neutral-600">
                  Estoy abierta a colaboraciones con marcas que compartan mis valores de 
                  calidad y autenticidad. Contáctame para discutir oportunidades específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
