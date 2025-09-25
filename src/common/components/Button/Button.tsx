import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'text';

type ButtonProps = {
  label?: string;
  icon?: string;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  variant?: ButtonVariant;
  size?: 'small' | 'normal' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPos = 'left',
  variant = 'primary',
  size = 'normal',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  children,
}) => {
  const getButtonClass = (): string => {
    const baseClass = 'p-button';
    const variantClass = variant === 'primary' ? '' : `p-button-${variant}`;
    const sizeClass = size === 'normal' ? '' : `p-button-${size}`;
    const loadingClass = loading ? 'p-button-loading' : '';
    
    return [baseClass, variantClass, sizeClass, loadingClass, className]
      .filter(Boolean)
      .join(' ');
  };

  return (
    <PrimeButton
      label={label}
      icon={icon}
      iconPos={iconPos}
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}
      type={type}
      className={getButtonClass()}
    >
      {children}
    </PrimeButton>
  );
};
