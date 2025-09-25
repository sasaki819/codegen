import React from 'react';
import { Checkbox } from 'primereact/checkbox';

type CheckboxInputProps = {
  id?: string;
  name?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  id,
  name,
  value = false,
  onChange,
  label,
  disabled = false,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex align-items-center ${className}`}>
      <Checkbox
        id={id}
        name={name}
        checked={value}
        onChange={(e) => onChange?.(e.checked)}
        disabled={disabled}
        required={required}
      />
      {label && (
        <label htmlFor={id} className="ml-2">
          {label}
        </label>
      )}
    </div>
  );
};
