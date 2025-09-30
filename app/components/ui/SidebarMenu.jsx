// components/ui/SidebarMenu.jsx
'use client';
import { useState, useEffect } from 'react';
import { ChevronRight, Code2, X } from 'lucide-react';

export default function SidebarMenu({ categories, onCategorySelect, activeCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [hasAutoHidden, setHasAutoHidden] = useState(false);

  useEffect(() => {
    if (!hasAutoHidden) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setHasAutoHidden(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoHidden]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <>
      {/* ICONO <> - Siempre visible cuando menú cerrado */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        className={`
          fixed left-4 top-1/2 -translate-y-1/2 z-[110]
          w-12 h-12 rounded-xl
          bg-gradient-to-br from-green-500/20 to-emerald-600/20
          border border-green-500/30 backdrop-blur-sm
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]
          ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <Code2 className="w-6 h-6 text-green-400" />
      </button>

      {/* MENÚ LATERAL */}
      <aside 
        onMouseLeave={() => setIsOpen(false)}
        className={`
          fixed left-0 top-0 h-screen w-80 z-[105]
          bg-black/95 backdrop-blur-xl border-r border-green-500/20
          transition-transform duration-500 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-green-500/20 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-green-400">Categorías</h3>
            <p className="text-sm text-gray-400 mt-1">{categories?.length || 0} disponibles</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-green-500/10 rounded-lg">
            <X className="w-5 h-5 text-gray-400 hover:text-green-400" />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
          {categories?.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => {
                  toggleCategory(category.id);
                  onCategorySelect(category.id);
                }}
                className={`
                  w-full flex items-center justify-between p-3 rounded-lg
                  transition-all duration-200
                  ${activeCategory === category.id 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'hover:bg-green-500/10 text-gray-300 hover:text-green-400'
                  }
                `}
              >
                <span className="font-medium">{category.name}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${expandedCategories[category.id] ? 'rotate-90' : ''}`} />
              </button>

              {expandedCategories[category.id] && category.agents && (
                <div className="ml-4 mt-2 space-y-1">
                  {category.agents.map(agent => (
                    <button
                      key={agent.id}
                      className="w-full text-left p-2 rounded text-sm text-gray-400 hover:text-green-400 hover:bg-green-500/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 inline-block mr-2" />
                      {agent.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}