import React from 'react';
import { RadioButton } from 'primereact/radiobutton';

export type RadioOption = {
  label: string;
  value: string | number;
};

type RadioGroupProps = {
  id?: string;
  name: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: RadioOption[];
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  disabled = false,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-column gap-2 ${className}`}>
      {options.map((option, index) => (
        <div key={option.value} className="flex align-items-center">
          <RadioButton
            id={`${id || name}-${index}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.value)}
            disabled={disabled}
            required={required}
          />
          <label htmlFor={`${id || name}-${index}`} className="ml-2">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
