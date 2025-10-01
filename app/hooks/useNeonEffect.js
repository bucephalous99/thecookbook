import { useState, useCallback } from 'react';

export const useNeonEffect = () => {
  const [isNearIcon, setIsNearIcon] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsNearIcon(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsNearIcon(false);
  }, []);

  return {
    isNearIcon,
    handleMouseEnter,
    handleMouseLeave,
    setIsNearIcon
  };
};
