import React, { useMemo, useCallback } from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';

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

export default AgentCard;
