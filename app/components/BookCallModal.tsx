'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Building, Mail, ArrowRight, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const stepVariants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-4"
          >
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary/60 focus:outline-none transition-all"
                required
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-primary hover:bg-primary-light text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {language === 'en' ? 'Continue' : 'Continuar'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-4"
          >
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={language === 'en' ? 'Your email' : 'Tu email'}
                className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary/60 focus:outline-none transition-all"
                required
              />
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-primary hover:bg-primary-light text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {language === 'en' ? 'Continue' : 'Continuar'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-4"
          >
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={language === 'en' ? 'Company name' : 'Nombre de empresa'}
                className="w-full bg-white/10 border-2 border-primary/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary/60 focus:outline-none transition-all"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              {language === 'en' ? 'Schedule Call' : 'Agendar Llamada'}
            </button>
          </motion.div>
        );
    }
  };

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
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-primary-light" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                {language === 'en' ? 'Schedule Your Free Call' : 'Agenda Tu Llamada Gratis'}
              </h3>
              <p className="text-gray-400 mt-2">
                {language === 'en' ? 'Quick, easy, no obligations' : 'Rápido, fácil, sin compromisos'}
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1 rounded-full flex-1 transition-colors duration-500',
                    step >= i ? 'bg-primary' : 'bg-gray-700'
                  )}
                />
              ))}
            </div>

            {/* Form steps */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>
            </form>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary-light" />
                {language === 'en' ? 'No credit card' : 'Sin tarjeta'}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-primary-light" />
                {language === 'en' ? '15min call' : 'Llamada 15min'}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}