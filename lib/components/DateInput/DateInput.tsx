import styles from './DateInput.module.css';

type DateInputProps = {
  date: string;
  onClick: () => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  placeholder?: string;
  pattern?: string;
  title?: string;
  id?: string;
  required?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
};

/**
 * DateInput component for entering a date.
 *
 * This component is a child of the Datepicker component and provides a text input field for entering
 * a date. It also provides functionalities to handle date validation and formatting.
 */
function DateInput({
  date,
  onClick,
  onBlur,
  onKeyDown,
  onChange,
  className,
  name,
  placeholder,
  pattern,
  title,
  id,
  required,
  innerRef,
}: DateInputProps) {
  return (
    <input
      data-testid='dateInput'
      className={className || styles.dateInput}
      type='text'
      value={date}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      id={id}
      name={name}
      pattern={pattern}
      title={title || 'Enter the date in this format: MM/DD/YYYY or MM-DD-YYYY'}
      tabIndex={0}
      required={required}
      ref={innerRef}
    />
  );
}

export default DateInput;
