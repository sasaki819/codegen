import React from 'react';
import { Dropdown } from 'primereact/dropdown';

export type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  id?: string;
  name?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  filter?: boolean;
  showClear?: boolean;
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  required = false,
  filter = false,
  showClear = false,
  className = '',
}) => {
  return (
    <Dropdown
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.value)}
      options={options}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      filter={filter}
      showClear={showClear}
      className={className}
    />
  );
};
