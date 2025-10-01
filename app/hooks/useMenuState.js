import { useState, useEffect, useCallback } from 'react';

export const useMenuState = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [iconOnly, setIconOnly] = useState(false);

  useEffect(() => {
    if (selectedCategory) return;
    const timer = setTimeout(() => {
      setMenuVisible(false);
      setIconOnly(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const openMenu = useCallback(() => {
    setMenuVisible(true);
    setIconOnly(false);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuVisible(false);
    setIconOnly(true);
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [menuVisible, openMenu, closeMenu]);

  const selectCategory = useCallback((category) => {
    setSelectedCategory(category);
    setMenuVisible(false);
    setIconOnly(true);
  }, []);

  return {
    menuVisible,
    selectedCategory,
    iconOnly,
    openMenu,
    closeMenu,
    toggleMenu,
    selectCategory
  };
};
