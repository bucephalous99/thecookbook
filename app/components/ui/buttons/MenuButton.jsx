import React from 'react';
import { Code2 } from 'lucide-react';
import { Z_INDEX } from '../../../constants/zIndex';

const MenuButton = React.memo(({ onClick, isActive, isNearIcon = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed left-4 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-xl
        bg-black/80 backdrop-blur-md border
        flex items-center justify-center
        transition-all duration-300
        ${isNearIcon && isActive
          ? 'scale-110 border-green-400 bg-green-500/20 shadow-lg shadow-green-500/50 text-green-300'
          : 'border-gray-600/50 hover:border-blue-500/50 text-white hover:scale-105'
        }
        ${className}
      `}
      style={{ zIndex: Z_INDEX.MENU_BUTTON }}
      aria-label="Abrir menú lateral"
    >
      <Code2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
});

MenuButton.displayName = 'MenuButton';

export default MenuButton;
