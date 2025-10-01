import { useState, useCallback } from 'react';

export const useHoverBounce = (scale = 1.1) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const bounceStyle = {
    transform: isHovered ? `scale(${scale})` : 'scale(1)',
    transition: 'transform 300ms ease-out'
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    bounceStyle
  };
};
