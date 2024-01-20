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
