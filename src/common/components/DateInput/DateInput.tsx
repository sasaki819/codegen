import React from 'react';
import { Calendar } from 'primereact/calendar';

type DateInputProps = {
  id?: string;
  name?: string;
  value?: Date;
  onChange?: (value: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showTime?: boolean;
  timeOnly?: boolean;
  dateFormat?: string;
  className?: string;
};

export const DateInput: React.FC<DateInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  minDate,
  maxDate,
  showTime = false,
  timeOnly = false,
  dateFormat = 'yy/mm/dd',
  className = '',
}) => {
  return (
    <Calendar
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.value as Date)}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      minDate={minDate}
      maxDate={maxDate}
      showTime={showTime}
      timeOnly={timeOnly}
      dateFormat={dateFormat}
      className={className}
    />
  );
};
