'use client';

import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const { language } = useLanguage();

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const content = {
    en: {
      title: "Secure Your Free Strategy Call",
      subtitle: "15-minute conversation to understand your needs",
      calendar: {
        title: "Book a Time",
        description: "Choose a convenient slot in our calendar"
      },
      features: [
        {
          icon: <Shield className="w-4 h-4" />,
          text: "No credit card required"
        },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Zero commitment"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          text: "15min call"
        }
      ]
    },
    es: {
      title: "Agenda tu Llamada Estratégica Gratis",
      subtitle: "15 minutos para entender tus necesidades",
      calendar: {
        title: "Reserva un Horario",
        description: "Elige un espacio conveniente en nuestro calendario"
      },
      features: [
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Sin tarjeta de crédito"
        },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Sin compromiso"
        },
        {
          icon: <Calendar className="w-4 h-4" />,
          text: "Llamada de 15min"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-dark-secondary border border-primary/20 rounded-2xl p-8 max-w-md w-full relative z-10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t.title}
              </h3>
              <p className="text-gray-400">
                {t.subtitle}
              </p>
            </div>

            {/* Calendar Section */}
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="font-display font-semibold text-white mb-2">
                {t.calendar.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                {t.calendar.description}
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                {/* Sample calendar slots - replace with actual calendar integration */}
                {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                  <button
                    key={time}
                    className="bg-white/10 hover:bg-white/20 text-white py-2 px-2 rounded-lg transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              {t.features.map((feature, index) => (
                <Fragment key={index}>
                  {index > 0 && <span>•</span>}
                  <span className="flex items-center gap-1">
                    {feature.icon}
                    {feature.text}
                  </span>
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}