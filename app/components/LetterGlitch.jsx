'use client';

import { useRef, useEffect, useCallback } from 'react';

const LetterGlitch = ({
  glitchColors = [
    'rgba(244, 63, 94, 0.15)',   // Rose primario
    'rgba(168, 85, 247, 0.12)',  // Purple secundario  
    'rgba(59, 130, 246, 0.08)',  // Blue accent
    'rgba(16, 185, 129, 0.06)',  // Emerald sutil
    'rgba(251, 191, 36, 0.04)',  // Amber muy sutil
    'rgba(139, 92, 246, 0.10)',  // Violet medio
    'rgba(236, 72, 153, 0.08)',  // Pink accent
    'rgba(6, 182, 212, 0.05)',   // Cyan sutil
  ],
  className = '',
  glitchSpeed = 100,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  opacity = 0.7,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*(){}[]<>?/\\|+=_-',
  enablePerformanceMode = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const performanceRef = useRef({ frameCount: 0, lastFpsCheck: Date.now() });

  const lettersAndSymbols = Array.from(characters);

  // Configuración optimizada para diferentes tamaños de pantalla
  const getResponsiveConfig = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      return { fontSize: 12, charWidth: 8, charHeight: 14, density: 0.6 };
    } else if (width < 1024) {
      return { fontSize: 13, charWidth: 9, charHeight: 15, density: 0.8 };
    }
    return { fontSize: 14, charWidth: 10, charHeight: 16, density: 1.0 };
  }, []);

  const getRandomChar = useCallback(() => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  }, [lettersAndSymbols]);

  const getRandomColor = useCallback(() => {
    const baseColor = glitchColors[Math.floor(Math.random() * glitchColors.length)];
    
    // Añadir variación de opacidad para más dinamismo
    const opacityVariation = 0.8 + (Math.random() * 0.4); // 0.8 - 1.2
    const finalOpacity = Math.min(1, opacity * opacityVariation);
    
    // Extraer valores RGBA si están disponibles
    const rgbaMatch = baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
    if (rgbaMatch) {
      const [, r, g, b] = rgbaMatch;
      return `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
    }
    
    return baseColor;
  }, [glitchColors, opacity]);

  const calculateGrid = useCallback((width, height, config) => {
    const { charWidth, charHeight, density } = config;
    const columns = Math.ceil((width / charWidth) * density);
    const rows = Math.ceil((height / charHeight) * density);
    return { columns, rows };
  }, []);

  const initializeLetters = useCallback((columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    
    letters.current = Array.from({ length: totalLetters }, (_, index) => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
      lastUpdate: Date.now() + (Math.random() * 8000), // Stagger más amplio
      updateInterval: 2000 + Math.random() * 5000, // Intervalos variables
      isActive: Math.random() < 0.7, // Solo 70% activo inicialmente
      fadePhase: Math.random() * Math.PI * 2, // Para efectos de fade
    }));
  }, [getRandomChar, getRandomColor]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    const config = getResponsiveConfig();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.current.imageSmoothingEnabled = false;
      context.current.textRenderingOptimization = 'optimizeSpeed';
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height, config);
    initializeLetters(columns, rows);
  }, [getResponsiveConfig, calculateGrid, initializeLetters]);

  const drawLetters = useCallback(() => {
    if (!context.current || letters.current.length === 0 || !canvasRef.current) return;
    
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    const config = getResponsiveConfig();
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurar fuente optimizada
    ctx.font = `${config.fontSize}px "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas", monospace`;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';

    const time = Date.now() * 0.001; // Para animaciones basadas en tiempo

    letters.current.forEach((letter, index) => {
      if (!letter.isActive) return;

      const col = index % grid.current.columns;
      const row = Math.floor(index / grid.current.columns);
      
      const x = col * config.charWidth;
      const y = row * config.charHeight;
      
      // Efecto de fade sutil basado en fase
      const fadeIntensity = (Math.sin(time + letter.fadePhase) * 0.1) + 0.9;
      
      // Micro-desplazamiento para efecto orgánico
      const offsetX = Math.sin(time * 2 + index * 0.1) * 0.3;
      const offsetY = Math.cos(time * 1.5 + index * 0.15) * 0.2;
      
      // Aplicar color con fade
      const colorWithFade = letter.color.replace(/[\d.]+\)$/, `${parseFloat(letter.color.match(/[\d.]+\)$/)?.[0] || '1') * fadeIntensity})`);
      
      ctx.fillStyle = colorWithFade;
      ctx.fillText(letter.char, x + offsetX, y + offsetY);
    });

    // Monitoreo de performance
    if (enablePerformanceMode) {
      performanceRef.current.frameCount++;
      const now = Date.now();
      if (now - performanceRef.current.lastFpsCheck > 5000) {
        const fps = performanceRef.current.frameCount / 5;
        performanceRef.current.frameCount = 0;
        performanceRef.current.lastFpsCheck = now;
        
        // Auto-ajuste de calidad si FPS es bajo
        if (fps < 30 && letters.current.length > 100) {
          letters.current = letters.current.filter((_, i) => i % 2 === 0);
        }
      }
    }
  }, [getResponsiveConfig, enablePerformanceMode]);

  const updateLetters = useCallback(() => {
    if (!letters.current?.length) return;
    
    const now = Date.now();
    
    letters.current.forEach((letter, index) => {
      // Actualización basada en intervalo individual
      if (now - letter.lastUpdate > letter.updateInterval) {
        // Chance de activar/desactivar letras
        if (Math.random() < 0.05) {
          letter.isActive = !letter.isActive;
        }
        
        if (letter.isActive) {
          letter.char = getRandomChar();
          letter.targetColor = getRandomColor();
          letter.lastUpdate = now;
          letter.updateInterval = 1000 + Math.random() * 4000;
          
          if (!smooth) {
            letter.color = letter.targetColor;
            letter.colorProgress = 1;
          } else {
            letter.colorProgress = 0;
          }
        }
      }
    });
  }, [getRandomChar, getRandomColor, smooth]);

  const handleSmoothTransitions = useCallback(() => {
    let needsRedraw = false;
    
    letters.current.forEach(letter => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.02; // Transición más lenta
        if (letter.colorProgress > 1) letter.colorProgress = 1;

        // Interpolación mejorada
        const progress = letter.colorProgress;
        const eased = progress * progress * (3 - 2 * progress); // Smooth step
        
        const currentMatch = letter.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
        const targetMatch = letter.targetColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
        
        if (currentMatch && targetMatch) {
          const r = Math.round(parseInt(currentMatch[1]) + (parseInt(targetMatch[1]) - parseInt(currentMatch[1])) * eased);
          const g = Math.round(parseInt(currentMatch[2]) + (parseInt(targetMatch[2]) - parseInt(currentMatch[2])) * eased);
          const b = Math.round(parseInt(currentMatch[3]) + (parseInt(targetMatch[3]) - parseInt(currentMatch[3])) * eased);
          const a = parseFloat(currentMatch[4] || '1') + (parseFloat(targetMatch[4] || '1') - parseFloat(currentMatch[4] || '1')) * eased;
          
          letter.color = `rgba(${r}, ${g}, ${b}, ${a})`;
          needsRedraw = true;
        }
      }
    });

    return needsRedraw;
  }, []);

  const animate = useCallback(() => {
    const now = Date.now();
    let shouldDraw = false;

    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      shouldDraw = true;
      lastGlitchTime.current = now;
    }

    if (smooth) {
      shouldDraw = handleSmoothTransitions() || shouldDraw;
    }

    if (shouldDraw) {
      drawLetters();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [glitchSpeed, updateLetters, smooth, handleSmoothTransitions, drawLetters]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d', { 
      alpha: true, 
      desynchronized: true,
      powerPreference: 'high-performance'
    });
    
    resizeCanvas();
    animate();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [resizeCanvas, animate]);

  // Estilos profesionales
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)',
    overflow: 'hidden',
  };

  const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    mixBlendMode: 'screen', // Efecto blend profesional
  };

  const outerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: `
      radial-gradient(circle at 20% 20%, rgba(244, 63, 94, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)
    `,
  };

  const centerVignetteStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, transparent 60%)',
  };

  return (
    <div style={containerStyle} className={className}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {outerVignette && <div style={outerVignetteStyle}></div>}
      {centerVignette && <div style={centerVignetteStyle}></div>}
    </div>
  );
};

export default LetterGlitch;