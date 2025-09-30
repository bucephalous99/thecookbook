// Primero, crea el archivo de datos para los logos
// app/data/cloudLogos.js
export const cloudLogos = {
    aws: "/aws.png",
    google: "/google.png", 
    hostinger: "/hostinger.png", // necesitarás agregar esta imagen
    digitalocean: "/digitalocean.png", // opcional
    vercel: "/vercel.png" // opcional
  };
  
  // Luego actualiza el componente AgentCard en AgentsStore.jsx
  import Image from 'next/image';
  import { cloudLogos } from '../../data/cloudLogos';
  
  const AgentCard = ({ agent, onSuggestionClick }) => {
    const [executionRange, setExecutionRange] = useState({ label: '0-1K' });
  
    const getBestWith = () => {
      const suggestions = {
        'Dialog Mind': { name: 'TaskFlow Ops', reason: 'automatización completa' },
        'Cortex Chat': { name: 'ContentFlow AI', reason: 'contenido + atención' },
        'FlowGrid Messenger': { name: 'RankFlow SEO', reason: 'comunicación + visibilidad' },
        'TaskFlow Ops': { name: 'Dialog Mind', reason: 'operaciones + chat' },
        'ContentFlow AI': { name: 'FlowGrid Messenger', reason: 'contenido + distribución' },
        'RankFlow SEO': { name: 'ContentFlow AI', reason: 'SEO + contenido' }
      };
      return suggestions[agent.name] || { name: 'ContentFlow AI', reason: 'sinergia perfecta' };
    };
  
    const suggestion = getBestWith();
  
    return (
      <div className="bg-black/60 backdrop-blur-md border border-gray-600/50 rounded-lg p-6 hover:bg-black/70 hover:border-blue-500/60 transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
              {agent.name}
            </h3>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">{agent.description}</p>
          
          <ExecutionSlider onChange={setExecutionRange} />
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <Code className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-medium text-gray-400">Stack:</span>
                <div className="flex gap-2 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white">⚛</div>
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-xs text-white">N</div>
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-xs text-white">P</div>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center text-xs text-white">D</div>
                </div>
              </div>
            </div>
            
            {/* Setup con imágenes reales de cloud providers */}
            <div className="flex items-start gap-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                  <Image 
                    src={cloudLogos.aws} 
                    alt="AWS" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </div>
                
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                  <Image 
                    src={cloudLogos.google} 
                    alt="Google Cloud" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </div>
                
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  H
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-gray-400">Setup:</span>
                <p className="text-sm text-gray-200 font-medium">{agent.setupCost}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4 bg-gray-800/50 rounded-lg p-3 border border-gray-600/30">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-medium text-gray-400">Best with:</span>
                <p className="text-sm text-blue-300 font-medium">{suggestion.name}</p>
                <p className="text-xs text-gray-500">{suggestion.reason}</p>
              </div>
              <button 
                onClick={() => onSuggestionClick(suggestion.name)}
                className="w-6 h-6 bg-blue-600/70 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors opacity-70 hover:opacity-100"
              >
                <Plus className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Cotizar
            </button>
            <button className="flex items-center gap-1 px-3 py-2 border border-gray-600 hover:bg-gray-700/50 rounded-md text-sm font-medium transition-colors text-gray-300">
              Beta
            </button>
          </div>
        </div>
      </div>
    );
  };