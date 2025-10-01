// components/ui/NeonGlow.jsx - VERSIÓN MEJORADA
'use client';
import { Z_INDEX } from '../../constants/zIndex';

export default function NeonGlow({ isActive = false }) {
  return (
    <>
      {/* LÍNEA VERTICAL NEON (solo borde izquierdo) */}
      {isActive && (
        <div
          className="fixed left-0 top-0 h-full w-1 pointer-events-none"
          style={{ zIndex: Z_INDEX.NEON_EFFECT }}
        >
          {/* Gradiente vertical */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-60" />
          
          {/* Resplandor pulsante */}
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              boxShadow: '0 0 40px 15px rgba(34,197,94,0.6), 0 0 80px 30px rgba(34,197,94,0.3)',
              background: 'linear-gradient(to bottom, rgba(34,197,94,0) 0%, rgba(34,197,94,0.8) 50%, rgba(34,197,94,0) 100%)'
            }}
          />
          
          {/* Partículas ascendentes (opcional) */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-green-400/50 animate-float"
                style={{
                  top: `${i * 20}%`,
                  left: '0',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}