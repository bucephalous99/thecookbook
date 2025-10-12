'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero messages
    hero_messages: [
      {
        title: "You started this business to be your own boss, not to work 24/7",
        subtitle: "Every small business owner faces this. Some found a way to work smarter, not harder."
      },
      {
        title: "Your phone buzzes at dinner. Again.",
        subtitle: "We get it. Customer service never stops. But it doesn't have to be you every single time."
      },
      {
        title: "We're not promising overnight success. We're offering real solutions.",
        subtitle: "Step by step automation that actually works for businesses like yours."
      },
      {
        title: "One extra day a week is now possible",
        subtitle: "Optimizing those tasks that consume 2-3 hours of your day"
      }
    ],
    cta: "Schedule Free Consultation",
    features: {
      no_commitment: "No commitment",
      response_24h: "24h response",
      fast_setup: "Fast setup",
      guaranteed_roi: "Guaranteed ROI"
    }
  },
  es: {
    // Mensajes del Hero
    hero_messages: [
      {
        title: "Otro fin de semana trabajando mientras la familia está en la playa",
        subtitle: "No es normal, pero se volvió tu realidad. Hay emprendedores que ya encontraron la salida."
      },
      {
        title: "Si no respondes rápido, el cliente se va con la competencia",
        subtitle: "En un mercado difícil, cada cliente perdido duele. Pero hay forma de atender mejor."
      },
      {
        title: "No prometemos millones, prometemos tiempo para lo que importa",
        subtitle: "Automatizar lo básico para que puedas enfocarte en hacer crecer tu negocio."
      },
      {
        title: "Un día extra a la semana es posible",
        subtitle: "Optimizando esas tareas que consumen 2-3 horas de tu día"
      }
    ],
    cta: "Agenda tu Consulta Gratis",
    features: {
      no_commitment: "Sin compromiso",
      response_24h: "Respuesta en 24h",
      fast_setup: "Implementación rápida",
      guaranteed_roi: "ROI garantizado"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}