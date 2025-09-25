import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

type TopButtonProps = {
  className?: string;
};

export const TopButton: React.FC<TopButtonProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      icon="pi pi-arrow-up"
      className={`p-button-rounded p-button-outlined fixed bottom-0 right-0 m-3 ${className}`}
      onClick={scrollToTop}
      aria-label="ページトップへ"
      style={{ zIndex: 1000 }}
    />
  );
};
