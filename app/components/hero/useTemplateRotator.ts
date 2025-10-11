import { useState, useEffect } from 'react';
import { HeroTemplate } from './types';

export const templates: HeroTemplate[] = [
  {
    id: 1,
    mainText: 'Un día extra a la semana, ahora es posible',
    subText: 'Optimizando esas tareas que te consumen 2-3 horas diarias',
    images: [
      { src: '/notion.png', alt: 'Notion', position: 'top-left' },
      { src: '/google-sheets-logo.png', alt: 'Google Sheets', position: 'top-right' },
      { src: '/gmail-logo.webp', alt: 'Gmail', position: 'bottom-left' },
      { src: '/google-drive-logo.png', alt: 'Google Drive', position: 'bottom-right' }
    ],
    animation: 'orbital',
    gradient: 'from-blue-500/20 to-purple-500/20',
    textGradient: 'from-blue-300 via-blue-200 to-purple-300'
  },
  {
    id: 2,
    mainText: 'El tiempo de respuesta determina la decisión de compra',
    subText: 'No los hagas esperar. Respuesta automática en segundos',
    images: [
      { src: '/whatsapp-logo.webp', alt: 'WhatsApp', position: 'top-left' },
      { src: '/instagram-logo.jpg', alt: 'Instagram', position: 'top-right' },
      { src: '/facebook-logo.webp', alt: 'Facebook', position: 'bottom-left' },
      { src: '/gmail-logo.webp', alt: 'Gmail', position: 'bottom-right' }
    ],
    animation: 'pulse',
    gradient: 'from-green-500/20 to-emerald-500/20',
    textGradient: 'from-green-300 via-emerald-200 to-teal-300'
  },
  {
    id: 3,
    mainText: 'Si la tecnología no te sirve, ¿para qué sirve?',
    subText: 'Explora soluciones on-demand diseñadas para ti',
    images: [
      { src: '/aws.png', alt: 'AWS', position: 'top-left' },
      { src: '/google.png', alt: 'Google', position: 'top-right' },
      { src: '/supabase.png', alt: 'Supabase', position: 'bottom-left' },
      { src: '/notion.png', alt: 'Notion', position: 'bottom-right' }
    ],
    animation: 'build',
    gradient: 'from-purple-500/20 to-pink-500/20',
    textGradient: 'from-purple-300 via-pink-200 to-rose-300'
  },
  {
    id: 4,
    mainText: '¿Cuándo fue la última vez que cenaste en familia?',
    subText: 'La automatización te devuelve el tiempo que realmente importa',
    images: [
      { src: '/notion.png', alt: 'Notion', position: 'top-left' },
      { src: '/google-drive-logo.png', alt: 'Google Drive', position: 'top-right' },
      { src: '/whatsapp-logo.webp', alt: 'WhatsApp', position: 'bottom-left' },
      { src: '/gmail-logo.webp', alt: 'Gmail', position: 'bottom-right' }
    ],
    animation: 'heart',
    gradient: 'from-red-500/20 to-rose-500/20',
    textGradient: 'from-red-300 via-rose-200 to-pink-300'
  },
  {
    id: 5,
    mainText: 'Todo conectado, todo automatizado',
    subText: 'Un ecosistema que trabaja en perfecta sincronía',
    images: [
      { src: '/google.png', alt: 'Google', position: 'top-left' },
      { src: '/gmail-logo.webp', alt: 'Gmail', position: 'top-right' },
      { src: '/google-sheets-logo.png', alt: 'Google Sheets', position: 'bottom-left' },
      { src: '/google-drive-logo.png', alt: 'Google Drive', position: 'bottom-right' }
    ],
    animation: 'network',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    textGradient: 'from-blue-300 via-cyan-200 to-sky-300'
  },
  {
    id: 6,
    mainText: 'Mientras duermes, tu negocio sigue vendiendo',
    subText: 'Presencia automática en todas las plataformas que importan',
    images: [
      { src: '/whatsapp-logo.webp', alt: 'WhatsApp', position: 'top-left' },
      { src: '/instagram-logo.jpg', alt: 'Instagram', position: 'top-right' },
      { src: '/facebook-logo.webp', alt: 'Facebook', position: 'bottom-left' },
      { src: '/aws.png', alt: 'AWS', position: 'bottom-right' }
    ],
    animation: 'float',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    textGradient: 'from-indigo-300 via-violet-200 to-purple-300'
  }
];

export const useTemplateRotator = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTemplate(prev => (prev + 1) % templates.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return {
    currentTemplate,
    setCurrentTemplate,
    isPlaying,
    setIsPlaying,
    template: templates[currentTemplate]
  };
};