import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

type BaseInputProps = {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

type TextInputProps = BaseInputProps & {
  type: 'text';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
};

type TextareaInputProps = BaseInputProps & {
  type: 'textarea';
  rows?: number;
  maxLength?: number;
  minLength?: number;
};

type InputProps = TextInputProps | TextareaInputProps;

export const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    name,
    value = '',
    onChange,
    placeholder,
    disabled = false,
    required = false,
    className = '',
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  if (props.type === 'textarea') {
    return (
      <InputTextarea
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={props.rows || 3}
        maxLength={props.maxLength}
        minLength={props.minLength}
        className={className}
      />
    );
  }

  return (
    <InputText
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      maxLength={props.maxLength}
      minLength={props.minLength}
      pattern={props.pattern}
      className={className}
    />
  );
};
