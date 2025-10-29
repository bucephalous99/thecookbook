'use client';

import { useState, useEffect } from 'react';
import { X, Mail, User, Sparkles, Users, Clock, CheckCircle } from 'lucide-react';

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreRegisterModal({ isOpen, onClose }: PreRegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [registeredCount] = useState(Math.floor(Math.random() * 50) + 150); // Simulated count
  const [availableSpots] = useState(Math.floor(Math.random() * 30) + 20); // Simulated spots
  const [showUrgency, setShowUrgency] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowUrgency(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          preferredDate: new Date('2026-01-05').toISOString(),
          message: 'Pre-registro para lanzamiento',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-black border-2 border-white/20 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Acceso Exclusivo
          </h2>
          <p className="text-white/70 font-sans mb-6">
            Únete a los primeros en experimentar el futuro
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-4 h-4 text-white/60" />
                <span className="text-2xl font-display font-bold text-white">{registeredCount}</span>
              </div>
              <p className="text-xs text-white/50 font-sans">Ya Registrados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-2xl font-display font-bold text-white">{availableSpots}</span>
              </div>
              <p className="text-xs text-white/50 font-sans">Lugares Restantes</p>
            </div>
          </div>

          {/* Urgency Banner */}
          {showUrgency && (
            <div className="mb-6 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg animate-fade-in">
              <p className="text-sm text-yellow-200 font-sans">
                Últimos lugares disponibles
              </p>
            </div>
          )}

          {/* Benefits List */}
          <div className="text-left space-y-2 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80 font-sans">Acceso prioritario al lanzamiento</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80 font-sans">Descuento exclusivo del 30%</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80 font-sans">Contenido y tutoriales gratuitos</p>
            </div>
          </div>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4 animate-bounce">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              ¡Bienvenido a la Lista!
            </h3>
            <p className="text-white/70 mb-4 font-sans">
              Eres uno de los primeros {registeredCount + 1}
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60 font-sans">
                Revisa tu email para confirmar tu registro y recibir tu contenido exclusivo
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white/80 mb-2 font-sans text-sm">
                Nombre *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full bg-white/5 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white/80 mb-2 font-sans text-sm">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full bg-white/5 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="text-red-400 text-sm text-center">
                Hubo un error. Por favor intenta de nuevo.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-white to-white/90 hover:from-white/90 hover:to-white text-black font-display font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Asegurando tu lugar...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Asegurar mi Lugar
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            {/* Trust Signal */}
            <p className="text-xs text-white/40 text-center mt-4 font-sans">
              Tus datos están seguros y nunca serán compartidos
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
