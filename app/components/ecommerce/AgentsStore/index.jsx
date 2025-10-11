'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { agentsData } from '../../../data/agentes/agents-data';
import LetterGlitch from '../../LetterGlitch';
import Header from '../../Header';
import NeonGlow from '../../ui/NeonGlow';
import SideMenu from '../../sidebar/SideMenu';
import MenuButton from '../../ui/buttons/MenuButton';
import AgentGrid from './AgentGrid';
import { Z_INDEX } from '../../../constants/zIndex';
import BookCallModal from '../../BookCallModal';

// Modal de ecosistemas optimizado con useMemo para evitar re-renders
const EcosystemModal = React.memo(({ isOpen, onClose, onBookCall }) => {
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
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: Z_INDEX.MODAL }}>
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
          <button
            onClick={onBookCall}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Book a Call para Ecosistema Custom
          </button>
        </footer>
      </div>
    </div>
  );
});

EcosystemModal.displayName = 'EcosystemModal';

// Componente principal optimizado
export default function AgentsStore() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const [iconOnly, setIconOnly] = useState(false);
  const [isNearIcon, setIsNearIcon] = useState(false);
  const [ecosystemModalOpen, setEcosystemModalOpen] = useState(false);
  const [bookCallModalOpen, setBookCallModalOpen] = useState(false);

  // Control de scroll en la página
  useEffect(() => {
    // Scroll al top
    window.scrollTo(0, 0);

    // Prevenir scroll Y overflow
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Forzar height 100vh en body
    document.body.style.height = '100vh';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);

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
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: Z_INDEX.BACKGROUND_GLITCH }}>
        <LetterGlitch
          glitchColors={['#1a1a2e', '#16213e', '#0f0f23', '#2d1b4e']}
          glitchSpeed={120}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 pointer-events-none" style={{ zIndex: Z_INDEX.OVERLAY }} />

      <Header />

      {/* Área de detección del efecto neon expandida */}
      <div
        className="fixed left-0 top-0 w-24 h-full"
        style={{ zIndex: Z_INDEX.NEON_EFFECT - 1 }}
        onMouseEnter={() => setIsNearIcon(true)}
        onMouseLeave={() => setIsNearIcon(false)}
      />

      <NeonGlow isActive={isNearIcon && iconOnly} />

      {/* Icono del menú lateral */}
      <MenuButton
        onClick={handleIconClick}
        isActive={iconOnly}
        isNearIcon={isNearIcon}
      />

      {/* Menú lateral */}
      <SideMenu
        isVisible={menuVisible && !selectedCategory}
        onCategorySelect={handleCategorySelect}
        onEcosystemSelect={(level) => console.log('Ecosistema:', level)}
        onCustomCall={() => setBookCallModalOpen(true)}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      />

      {/* Botón flotante de ecosistemas */}
      <button
        onClick={() => setEcosystemModalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        style={{ zIndex: Z_INDEX.FLOATING_BUTTONS }}
        aria-label="Abrir ecosistemas"
      >
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </button>

      <EcosystemModal
        isOpen={ecosystemModalOpen}
        onClose={() => setEcosystemModalOpen(false)}
        onBookCall={() => setBookCallModalOpen(true)}
      />

      <BookCallModal
        isOpen={bookCallModalOpen}
        onClose={() => setBookCallModalOpen(false)}
      />

      {/* Contenido principal */}
      <main className="h-screen overflow-hidden relative" style={{ zIndex: Z_INDEX.CONTENT }}>
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

            <AgentGrid
              filteredAgents={filteredAgents}
              onSuggestionClick={handleSuggestionClick}
            />
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
