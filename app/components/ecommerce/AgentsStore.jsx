'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { agentsData } from '../../data/agentes/agents-data';
import LetterGlitch from '../LetterGlitch';
import Header from '../Header';
import Image from 'next/image';
import NeonGlow from '../ui/NeonGlow';
import SideMenu from '../sidebar/SideMenu';

// Modal de ecosistemas optimizado con useMemo para evitar re-renders
const EcosystemModal = React.memo(({ isOpen, onClose }) => {
  const ecosystemPacks = useMemo(() => [
    {
      id: 'communication',
      name: 'Pack Comunicación Total',
      agents: ['FlowGrid Messenger', 'Cortex Chat', 'Dialog Mind'],
      description: 'Automatiza toda tu comunicación: WhatsApp, email y chat web',
      savings: '15% descuento',
      color: 'blue'
    },
    {
      id: 'marketing',
      name: 'Pack Marketing Completo', 
      agents: ['ContentFlow AI', 'SocialMind', 'RankFlow SEO'],
      description: 'Contenido, redes sociales y SEO en piloto automático',
      savings: '20% descuento',
      color: 'green'
    },
    {
      id: 'enterprise',
      name: 'Pack Productividad Enterprise',
      agents: ['TaskFlow Ops', 'Dialog Mind', 'ContentFlow AI'],
      description: 'Operaciones, comunicación y contenido para empresas',
      savings: '25% descuento',
      color: 'purple'
    }
  ], []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
        aria-label="Cerrar modal"
      />
      <div className="relative bg-black/90 backdrop-blur-md border border-gray-600/50 rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Ecosistemas Pre-configurados
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700/50"
            aria-label="Cerrar"
          >
            <Plus className="w-6 h-6 rotate-45" />
          </button>
        </header>
        
        <p className="text-gray-300 mb-8">
          Packs de agentes que trabajan juntos para automatizar procesos completos de tu negocio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemPacks.map((pack) => (
            <article 
              key={pack.id} 
              className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {pack.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {pack.description}
              </p>
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-400 mb-2 block">
                  Incluye:
                </span>
                <ul className="space-y-1">
                  {pack.agents.map((agent, i) => (
                    <li key={i} className="text-sm text-blue-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      {agent}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <span className="text-green-400 text-sm font-medium">
                  {pack.savings}
                </span>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Cotizar Pack
              </button>
            </article>
          ))}
        </div>
        
        <footer className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Book a Call para Ecosistema Custom
          </button>
        </footer>
      </div>
    </div>
  );
});

EcosystemModal.displayName = 'EcosystemModal';

// Componente de tarjeta de agente optimizado
const AgentCard = React.memo(({ agent, onSuggestionClick }) => {
  // Memoizar las sugerencias para evitar cálculos repetidos
  const suggestion = useMemo(() => {
    const suggestions = {
      'Dialog Mind': { name: 'TaskFlow Ops', reason: 'automatización completa' },
      'Cortex Chat': { name: 'ContentFlow AI', reason: 'contenido + atención' },
      'FlowGrid Messenger': { name: 'RankFlow SEO', reason: 'comunicación + visibilidad' },
      'TaskFlow Ops': { name: 'Dialog Mind', reason: 'operaciones + chat' },
      'ContentFlow AI': { name: 'FlowGrid Messenger', reason: 'contenido + distribución' },
      'RankFlow SEO': { name: 'ContentFlow AI', reason: 'SEO + contenido' }
    };
    return suggestions[agent.name] || { name: 'ContentFlow AI', reason: 'sinergia perfecta' };
  }, [agent.name]);

  const handleSuggestionClick = useCallback(() => {
    onSuggestionClick(suggestion.name);
  }, [onSuggestionClick, suggestion.name]);

  return (
    <article className="bg-black/60 backdrop-blur-md border border-gray-600/50 rounded-lg p-6 hover:bg-black/70 hover:border-blue-500/60 transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <header className="mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
            {agent.name}
          </h3>
        </header>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {agent.description}
        </p>
        
        <div className="space-y-3 mb-6">
          {/* Stack tecnológico */}
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-sm mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-medium text-gray-400">Stack:</span>
              <div className="flex gap-2 mt-1" role="list" aria-label="Tecnologías utilizadas">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white" title="React">⚛</div>
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-xs text-white" title="Node.js">N</div>
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-xs text-white" title="Python">P</div>
                <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-xs text-white" title="Docker">D</div>
              </div>
            </div>
          </div>
          
          {/* Proveedores cloud */}
          <div className="flex items-start gap-2">
            <div className="flex gap-2" role="list" aria-label="Proveedores cloud">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center p-1" title="AWS">
                <Image 
                  src="/aws.png" 
                  alt="AWS" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </div>
              
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center p-1" title="Google Cloud">
                <Image 
                  src="/google.png" 
                  alt="Google Cloud" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </div>
              
              <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs" title="Hostinger">
                H
              </div>
            </div>
            <div>
              <span className="text-xs font-medium text-gray-400">Setup:</span>
              <p className="text-sm text-gray-200 font-medium">{agent.setupCost}</p>
            </div>
          </div>
        </div>
        
        {/* Recomendación */}
        <div className="mb-4 bg-gray-800/50 rounded-lg p-3 border border-gray-600/30">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-400">Best with:</span>
              <p className="text-sm text-blue-300 font-medium">{suggestion.name}</p>
              <p className="text-xs text-gray-500">{suggestion.reason}</p>
            </div>
            <button 
              onClick={handleSuggestionClick}
              className="w-6 h-6 bg-blue-600/70 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors opacity-70 hover:opacity-100"
              aria-label={`Ver ${suggestion.name}`}
            >
              <Plus className="w-3 h-3 text-white" />
            </button>
          </div>
        </div>
        
        {/* Botones de acción */}
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Cotizar
          </button>
          <button className="flex items-center gap-1 px-3 py-2 border border-gray-600 hover:bg-gray-700/50 rounded-md text-sm font-medium transition-colors text-gray-300">
            Beta
          </button>
        </div>
      </div>
    </article>
  );
});

AgentCard.displayName = 'AgentCard';

// Componente principal optimizado
export default function AgentsStore() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const [iconOnly, setIconOnly] = useState(false);
  const [isNearIcon, setIsNearIcon] = useState(false);
  const [ecosystemModalOpen, setEcosystemModalOpen] = useState(false);

  // Auto-hide del menú optimizado
  useEffect(() => {
    if (selectedCategory) return;
    
    const timer = setTimeout(() => {
      setMenuVisible(false);
      setIconOnly(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Handlers memoizados para evitar re-renders innecesarios
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
    setMenuVisible(false);
    setIconOnly(true);
  }, []);

  const handleSuggestionClick = useCallback((agentName) => {
    // Buscar el agente en todas las categorías
    const allAgents = Object.values(agentsData).flat();
    const targetAgent = allAgents.find(agent => agent.name === agentName);
    
    if (targetAgent) {
      // Encontrar la categoría del agente sugerido
      const targetCategory = Object.keys(agentsData).find(category => 
        agentsData[category].some(agent => agent.name === agentName)
      );
      
      if (targetCategory) {
        setSelectedCategory(targetCategory);
        // Scroll suave al agente específico después de un breve delay
        setTimeout(() => {
          const element = document.getElementById(`agent-${targetAgent.id}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.style.animation = 'pulse 2s ease-in-out';
          }
        }, 100);
      }
    }
  }, []);

  const handleIconClick = useCallback(() => {
    setMenuVisible(true);
    setIconOnly(false);
    if (selectedCategory) {
      setTimeout(() => {
        setMenuVisible(false);
        setIconOnly(true);
      }, 5000);
    }
  }, [selectedCategory]);

  const handleMenuMouseEnter = useCallback(() => {
    setMenuVisible(true);
  }, []);

  const handleMenuMouseLeave = useCallback(() => {
    if (selectedCategory) {
      setMenuVisible(false);
      setIconOnly(true);
    } else {
      setTimeout(() => {
        setMenuVisible(false);
        setIconOnly(true);
      }, 500);
    }
  }, [selectedCategory]);

  // Agentes filtrados memoizados
  const filteredAgents = useMemo(() => {
    return selectedCategory ? agentsData[selectedCategory] || [] : [];
  }, [selectedCategory]);

  return (
    <>
      {/* Background effects */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LetterGlitch 
          glitchColors={['#1a1a2e', '#16213e', '#0f0f23', '#2d1b4e']}
          glitchSpeed={120}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      <div className="fixed inset-0 w-full h-full z-1 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 pointer-events-none" />
      
      <Header />
      
      {/* Área de detección del efecto neon expandida */}
      <div 
        className="fixed left-0 top-0 w-24 h-full z-15"
        onMouseEnter={() => setIsNearIcon(true)}
        onMouseLeave={() => setIsNearIcon(false)}
      />
      
      <NeonGlow isActive={isNearIcon && iconOnly} />
      
      {/* Icono del menú lateral */}
      <button
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer group transition-all duration-300 ${
          isNearIcon && iconOnly ? 'scale-110' : ''
        }`}
        onClick={handleIconClick}
        aria-label="Abrir menú lateral"
      >
        <div className={`w-10 h-10 bg-black/80 backdrop-blur-md border rounded-lg flex items-center justify-center text-white transition-all duration-300 ${
          isNearIcon && iconOnly 
            ? 'border-green-400 bg-green-500/20 text-green-300 shadow-lg shadow-green-500/50' 
            : 'border-gray-600/50 hover:border-blue-500/50'
        }`}>
          <div className="w-5 h-5 flex items-center justify-center font-mono text-sm">
            {'<>'}
          </div>
        </div>
      </button>
      
      {/* Menú lateral */}
      <SideMenu 
        isVisible={menuVisible && !selectedCategory}
        onCategorySelect={handleCategorySelect}
        onEcosystemSelect={(level) => console.log('Ecosistema:', level)}
        onCustomCall={() => console.log('Book a call')}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      />
      
      {/* Botón flotante de ecosistemas */}
      <button 
        onClick={() => setEcosystemModalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
        aria-label="Abrir ecosistemas"
      >
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </button>
      
      <EcosystemModal 
        isOpen={ecosystemModalOpen}
        onClose={() => setEcosystemModalOpen(false)}
      />
      
      {/* Contenido principal */}
      <main className="min-h-screen relative z-10">
        {selectedCategory ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 ml-20">
            <header className="mb-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-600/50">
                <h1 className="text-3xl font-bold text-white mb-4">{selectedCategory}</h1>
                <p className="text-gray-300">
                  Agentes de IA pre-configurados listos para implementar en tu negocio.
                  Cada agente incluye documentación completa e integración técnica.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <div key={agent.id} id={`agent-${agent.id}`}>
                  <AgentCard 
                    agent={agent} 
                    onSuggestionClick={handleSuggestionClick}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen pt-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                IA no es magia, son procesos
              </h1>
              <p className="text-gray-300">
                Usa el menú lateral para navegar por los agentes
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}