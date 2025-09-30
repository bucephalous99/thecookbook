// app/data/agentes/categories.js
export const categoriesConfig = {
    'Agentes Conversacionales': {
      id: 'conversational',
      name: 'Agentes Conversacionales',
      description: 'IA para atención al cliente y conversaciones automatizadas',
      icon: '🧠',
      color: 'blue'
    },
    'Mensajerías y Comunicación': {
      id: 'messaging',
      name: 'Mensajerías y Comunicación',
      description: 'Automatización de comunicaciones multicanal',
      icon: '📱',
      color: 'green'
    },
    'Operaciones y Productividad': {
      id: 'operations',
      name: 'Operaciones y Productividad',
      description: 'Automatización de procesos y flujos de trabajo',
      icon: '⚡',
      color: 'yellow'
    },
    'Marketing y Creación de Contenido': {
      id: 'marketing',
      name: 'Marketing y Creación de Contenido',
      description: 'Generación automática de contenido y marketing',
      icon: '✍️',
      color: 'purple'
    },
    'SEO y Strategy': {
      id: 'seo',
      name: 'SEO y Strategy',
      description: 'Optimización SEO y análisis estratégico automatizado',
      icon: '🔍',
      color: 'red'
    }
  };
  
  export const categoriesList = Object.keys(categoriesConfig);