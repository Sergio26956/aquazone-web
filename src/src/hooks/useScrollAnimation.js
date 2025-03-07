// src/hooks/useScrollAnimation.js
import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
}
