// app/data/agentes/agents-data.js
export const agentsData = {
    'Agentes Conversacionales': [
      {
        id: 1,
        name: 'Dialog Mind',
        slug: 'dialog-mind',
        description: 'Agente conversacional avanzado con procesamiento de lenguaje natural',
        longDescription: 'Sistema completo de IA conversacional con capacidades avanzadas de comprensión contextual, memoria de conversación y personalización según industria.',
        stack: 'OpenAI GPT-4, Langchain, Node.js, PostgreSQL',
        setupCost: '$89/mes (APIs + hosting)',
        agentCost: 297,
        currency: 'USD',
        industries: ['Seguros', 'Real Estate', 'Finanzas'],
        rating: 4.8,
        reviews: 156,
        icon: '🧠',
        features: [
          'Comprensión contextual avanzada',
          'Memoria de conversación persistente',
          'Integración multi-canal',
          'Analytics en tiempo real',
          'Personalización por industria'
        ],
        techStack: [
          'OpenAI GPT-4 Turbo',
          'Langchain Framework',
          'Node.js Backend',
          'PostgreSQL Database',
          'Redis Cache',
          'WebSocket Real-time'
        ],
        integrations: ['WhatsApp', 'Telegram', 'Slack', 'Web Chat', 'API REST'],
        deliveryTime: '3-5 días',
        support: '6 meses incluido',
        demo: true,
        beta: true
      },
      {
        id: 2,
        name: 'Cortex Chat',
        slug: 'cortex-chat',
        description: 'Sistema de chat inteligente para atención al cliente 24/7',
        longDescription: 'Solución completa de atención al cliente automatizada con escalamiento inteligente a agentes humanos.',
        stack: 'Claude API, React, PostgreSQL, WebSocket',
        setupCost: '$65/mes (APIs + hosting)',
        agentCost: 199,
        currency: 'USD',
        industries: ['Seguros', 'Finanzas', 'Retail'],
        rating: 4.6,
        reviews: 89,
        icon: '💬',
        features: [
          'Escalamiento inteligente',
          'Multi-idioma automático',
          'Dashboard de métricas',
          'Integración CRM',
          'Respuestas predefinidas'
        ],
        techStack: [
          'Claude 3.5 Sonnet',
          'React Frontend',
          'PostgreSQL Database',
          'WebSocket Protocol',
          'Redis Session Store'
        ],
        integrations: ['Zendesk', 'Salesforce', 'HubSpot', 'Intercom'],
        deliveryTime: '2-3 días',
        support: '3 meses incluido',
        demo: true,
        beta: true
      }
    ],
    'Mensajerías y Comunicación': [
      {
        id: 3,
        name: 'FlowGrid Messenger',
        slug: 'flowgrid-messenger',
        description: 'Automatización de mensajería multicanal inteligente',
        longDescription: 'Platform unificada para gestionar comunicaciones automatizadas en WhatsApp, Telegram, SMS y email.',
        stack: 'WhatsApp API, Telegram Bot, Express, MongoDB',
        setupCost: '$45/mes (APIs + hosting)',
        agentCost: 149,
        currency: 'USD',
        industries: ['Real Estate', 'Creadores de Contenido', 'E-commerce'],
        rating: 4.7,
        reviews: 203,
        icon: '📱',
        features: [
          'Multicanal unificado',
          'Automatización de flujos',
          'Segmentación avanzada',
          'Analytics detallados',
          'Templates personalizables'
        ],
        techStack: [
          'WhatsApp Business API',
          'Telegram Bot API',
          'Express.js Server',
          'MongoDB Database',
          'Twilio SMS'
        ],
        integrations: ['WhatsApp', 'Telegram', 'SMS', 'Email', 'Slack'],
        deliveryTime: '1-2 días',
        support: '4 meses incluido',
        demo: true,
        beta: true
      }
    ],
    'Operaciones y Productividad': [
      {
        id: 4,
        name: 'TaskFlow Ops',
        slug: 'taskflow-ops',
        description: 'Automatización de flujos de trabajo y tareas repetitivas',
        longDescription: 'Sistema completo de automatización empresarial con integración a las principales herramientas de productividad.',
        stack: 'Zapier API, Notion API, N8N, Python',
        setupCost: '$55/mes (APIs + hosting)',
        agentCost: 179,
        currency: 'USD',
        industries: ['Real Estate', 'Creadores de Contenido', 'Consultoría'],
        rating: 4.6,
        reviews: 134,
        icon: '⚡',
        features: [
          'Workflows visuales',
          'Triggers inteligentes',
          'Integración masiva',
          'Monitoreo en tiempo real',
          'Templates pre-configurados'
        ],
        techStack: [
          'N8N Workflow Engine',
          'Python Scripts',
          'Zapier Integrations',
          'Notion API',
          'Google Workspace API'
        ],
        integrations: ['Notion', 'Google Workspace', 'Slack', 'Trello', 'Asana'],
        deliveryTime: '4-6 días',
        support: '6 meses incluido',
        demo: true,
        beta: true
      }
    ],
    'Marketing y Creación de Contenido': [
      {
        id: 5,
        name: 'ContentFlow AI',
        slug: 'contentflow-ai',
        description: 'Generación automática de contenido multiformat',
        longDescription: 'Suite completa para creación automatizada de contenido: textos, imágenes, videos cortos y posts para redes sociales.',
        stack: 'GPT-4, DALL-E 3, Canva API, FFmpeg',
        setupCost: '$85/mes (APIs + hosting)',
        agentCost: 229,
        currency: 'USD',
        industries: ['Creadores de Contenido', 'Real Estate', 'E-commerce'],
        rating: 4.9,
        reviews: 412,
        icon: '✍️',
        features: [
          'Contenido multi-formato',
          'Brand voice consistency',
          'Calendario de publicación',
          'A/B testing automático',
          'Analytics de performance'
        ],
        techStack: [
          'OpenAI GPT-4',
          'DALL-E 3 API',
          'Canva API',
          'FFmpeg Video',
          'Instagram Graph API'
        ],
        integrations: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'TikTok'],
        deliveryTime: '5-7 días',
        support: '6 meses incluido',
        demo: true,
        beta: true
      }
    ],
    'SEO y Strategy': [
      {
        id: 6,
        name: 'RankFlow SEO',
        slug: 'rankflow-seo',
        description: 'Optimización SEO automatizada con análisis inteligente',
        longDescription: 'Sistema completo de SEO automatizado con análisis de competencia, keyword research y optimización de contenido.',
        stack: 'SEMrush API, Ahrefs, Python, Elasticsearch',
        setupCost: '$110/mes (APIs + hosting)',
        agentCost: 399,
        currency: 'USD',
        industries: ['Creadores de Contenido', 'Real Estate', 'E-commerce'],
        rating: 4.8,
        reviews: 267,
        icon: '🔍',
        features: [
          'Keyword research automático',
          'Análisis de competencia',
          'Optimización de contenido',
          'Monitoreo de rankings',
          'Reportes automatizados'
        ],
        techStack: [
          'SEMrush API',
          'Ahrefs API',
          'Python Analytics',
          'Elasticsearch',
          'Google Search Console API'
        ],
        integrations: ['Google Analytics', 'Search Console', 'WordPress', 'Shopify'],
        deliveryTime: '7-10 días',
        support: '12 meses incluido',
        demo: true,
        beta: true
      }
    ]
  };
  
  export const categories = [
    'Agentes Conversacionales',
    'Mensajerías y Comunicación', 
    'Operaciones y Productividad',
    'Marketing y Creación de Contenido',
    'SEO y Strategy'
  ];
  
  export const industries = [
    'Todas',
    'Seguros',
    'Real Estate', 
    'Finanzas',
    'Creadores de Contenido',
    'E-commerce',
    'Retail',
    'Consultoría'
  ];
  
  // Funciones de utilidad
  export function getAllAgents() {
    return Object.values(agentsData).flat();
  }
  
  export function getAgentsByCategory(category) {
    return agentsData[category] || [];
  }
  
  export function getAgentBySlug(slug) {
    const allAgents = getAllAgents();
    return allAgents.find(agent => agent.slug === slug);
  }
  
  export function getAgentsByIndustry(industry) {
    if (industry === 'Todas') return getAllAgents();
    const allAgents = getAllAgents();
    return allAgents.filter(agent => agent.industries.includes(industry));
  }
  
  export function searchAgents(query) {
    const allAgents = getAllAgents();
    const searchTerm = query.toLowerCase();
    return allAgents.filter(agent => 
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.description.toLowerCase().includes(searchTerm) ||
      agent.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      agent.industries.some(industry => industry.toLowerCase().includes(searchTerm))
    );
  }