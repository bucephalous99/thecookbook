'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Download } from 'lucide-react';

export default function SnippetModal({ snippet, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [contactMethod, setContactMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    automation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen || !snippet) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([snippet.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${snippet.id}.${snippet.language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div
        className="relative bg-gray-900 border border-gray-700 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Deja de perder tiempo en tareas repetitivas
            </h2>
            <p className="text-purple-100 text-sm">
              Agenda tu consultoría gratuita y descubre qué puedes automatizar hoy
            </p>
          </div>

          {/* Formulario de captura de leads */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              // Simular envío (aquí conectarías con tu backend/API)
              await new Promise(resolve => setTimeout(resolve, 1000));

              // Aquí enviarías los datos: formData, contactMethod
              console.log('Lead capturado:', { ...formData, contactMethod });

              setIsSubmitting(false);

              // Resetear formulario
              setFormData({ name: '', contact: '', automation: '' });
              setContactMethod('');

              // Cerrar modal después de éxito
              setTimeout(() => onClose(), 500);
            }}
            className="space-y-4"
          >
            {/* Campo 1: Nombre */}
            <input
              type="text"
              placeholder="¿Cómo te llamas?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            {/* Campo 2: Contacto preferido */}
            <select
              value={contactMethod}
              onChange={(e) => {
                setContactMethod(e.target.value);
                setFormData({ ...formData, contact: '' });
              }}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="" className="bg-gray-900">¿Cómo prefieres que te contactemos?</option>
              <option value="whatsapp" className="bg-gray-900">WhatsApp</option>
              <option value="email" className="bg-gray-900">Email</option>
            </select>

            {/* Campo 3: Input dinámico basado en selección */}
            {contactMethod === 'whatsapp' && (
              <input
                type="tel"
                placeholder="+507 1234-5678"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            )}
            {contactMethod === 'email' && (
              <input
                type="email"
                placeholder="tu@email.com"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            )}

            {/* Campo 4: Calificación de intención */}
            <select
              value={formData.automation}
              onChange={(e) => setFormData({ ...formData, automation: e.target.value })}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="" className="bg-gray-900">¿Qué quieres automatizar primero?</option>
              <option value="reportes" className="bg-gray-900">Reportes y documentos</option>
              <option value="ventas" className="bg-gray-900">Proceso de ventas</option>
              <option value="soporte" className="bg-gray-900">Atención al cliente</option>
              <option value="marketing" className="bg-gray-900">Marketing y redes sociales</option>
              <option value="otro" className="bg-gray-900">Otro (cuéntanos en la llamada)</option>
            </select>

            {/* Testimonio */}
            <div className="bg-white/10 rounded-lg p-3 mb-4 border-l-4 border-green-400">
              <p className="text-white text-sm italic">
                "Gracias a The CookBook, mi equipo ahorró 18 horas semanales en reportes automáticos"
              </p>
              <p className="text-white/70 text-xs mt-1">
                — María González, CEO TechStart Panamá
              </p>
            </div>

            {/* Botón de submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 px-6 rounded-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105'
              } text-white`}
            >
              {isSubmitting ? 'Agendando...' : 'Agendar Mi Consultoría Gratuita'}
            </button>

            {/* Badges de confianza */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center space-x-1 text-white/70 text-xs">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Soporte en Panamá</span>
              </div>
              <div className="flex items-center space-x-1 text-white/70 text-xs">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Respuesta &lt; 1h</span>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Language: {snippet.language}</span>
              <span className="text-sm text-gray-400">Difficulty: {snippet.difficulty}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded font-medium transition-colors"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 px-4 py-2 rounded transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar
              </button>
            </div>
          </div>

          <div className="p-6 bg-gray-950">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code className={`language-${snippet.language}`}>
                {snippet.code}
              </code>
            </pre>
          </div>

          {snippet.explanation && (
            <div className="p-6 border-t border-gray-700 bg-gray-900">
              <h3 className="text-lg font-semibold text-white mb-3">Explicación</h3>
              <p className="text-gray-300 whitespace-pre-line">{snippet.explanation}</p>
            </div>
          )}

          <div className="p-6 border-t border-gray-700 bg-gray-900">
            <h4 className="text-sm font-semibold text-white mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {snippet.tags.map((tag) => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}