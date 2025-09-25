import React from 'react';
import { InputNumber } from 'primereact/inputnumber';

type NumberInputProps = {
  id?: string;
  name?: string;
  value?: number;
  onChange?: (value: number | null) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  useGrouping?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export const NumberInput: React.FC<NumberInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  min,
  max,
  step = 1,
  useGrouping = false,
  prefix,
  suffix,
  className = '',
}) => {
  return (
    <InputNumber
      id={id}
      name={name}
      value={value}
      onValueChange={(e) => onChange?.(e.value)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      min={min}
      max={max}
      step={step}
      useGrouping={useGrouping}
      prefix={prefix}
      suffix={suffix}
      className={className}
    />
  );
};
