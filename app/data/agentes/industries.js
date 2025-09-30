// app/data/agentes/industries.js
export const industriesConfig = {
    'Seguros': {
      id: 'insurance',
      name: 'Seguros',
      description: 'Automatización para compañías aseguradoras',
      icon: '🛡️',
      color: 'blue'
    },
    'Real Estate': {
      id: 'real-estate',
      name: 'Real Estate',
      description: 'Soluciones para inmobiliarias y agentes',
      icon: '🏠',
      color: 'green'
    },
    'Finanzas': {
      id: 'finance',
      name: 'Finanzas',
      description: 'Automatización para sector financiero',
      icon: '💰',
      color: 'yellow'
    },
    'Creadores de Contenido': {
      id: 'content-creators',
      name: 'Creadores de Contenido',
      description: 'Herramientas para influencers y creators',
      icon: '🎨',
      color: 'purple'
    },
    'E-commerce': {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Automatización para tiendas online',
      icon: '🛒',
      color: 'red'
    },
    'Retail': {
      id: 'retail',
      name: 'Retail',
      description: 'Soluciones para comercio minorista',
      icon: '🏪',
      color: 'indigo'
    }
  };
  
  export const industriesList = Object.keys(industriesConfig);