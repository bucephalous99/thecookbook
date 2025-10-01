'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Calendar, Code, Plus } from 'lucide-react';
import { Z_INDEX } from '../../constants/zIndex';

export default function SideMenu({ 
  isVisible, 
  onCategorySelect, 
  onEcosystemSelect, 
  onCustomCall, 
  onMouseEnter, 
  onMouseLeave 
}) {
  const [agentsExpanded, setAgentsExpanded] = useState(false);
  const [ecosystemsExpanded, setEcosystemsExpanded] = useState(false);

  const categories = [
    { id: 'messaging', name: 'Mensajerías', key: 'Mensajerías y Comunicación' },
    { id: 'marketing', name: 'Marketing y Contenido', key: 'Marketing y Creación de Contenido' },
    { id: 'operations', name: 'Operaciones y Administrativo', key: 'Operaciones y Productividad' },
    { id: 'seo', name: 'SEO y Funnel', key: 'SEO y Strategy' }
  ];

  const ecosystemLevels = [
    { id: 'starter', name: 'Nivel 1 - Starter', desc: '0-1K ejecuciones/mes' },
    { id: 'hacker', name: 'Nivel 2 - Hacker', desc: '1K-10K ejecuciones/mes' },
    { id: 'enterprise', name: 'Nivel 3 - Enterprise', desc: 'Ilimitadas' }
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-full transition-all duration-500 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ zIndex: Z_INDEX.SIDE_MENU }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gradient-to-r from-black/95 to-black/80 backdrop-blur-md border-r border-gray-600/50 p-6 h-full w-80">
        
        <div className="mb-6">
          <button
            className="w-full flex items-center justify-between text-lg font-bold text-white mb-2 hover:text-blue-300 transition-colors"
            onMouseEnter={() => setAgentsExpanded(true)}
          >
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              Agentes Aislados
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
              agentsExpanded ? 'rotate-180' : ''
            }`} />
          </button>
          
          <div 
            className={`transition-all duration-300 overflow-hidden ${
              agentsExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
            onMouseLeave={() => setAgentsExpanded(false)}
          >
            <div className="space-y-1 mt-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.key)}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors flex items-center justify-between group text-sm"
                >
                  <span>{category.name}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <button
            className="w-full flex items-center justify-between text-lg font-bold text-white mb-2 hover:text-purple-300 transition-colors"
            onMouseEnter={() => setEcosystemsExpanded(true)}
          >
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-purple-400" />
              Ecosistemas
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
              ecosystemsExpanded ? 'rotate-180' : ''
            }`} />
          </button>
          
          <div 
            className={`transition-all duration-300 overflow-hidden ${
              ecosystemsExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
            onMouseLeave={() => setEcosystemsExpanded(false)}
          >
            <div className="space-y-1 mt-2">
              {ecosystemLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => onEcosystemSelect(level.id)}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors text-sm"
                >
                  <div className="font-medium">{level.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{level.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={onCustomCall}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Book a Call for Custom Deploy
        </button>
      </div>
    </aside>
  );
}