import styles from './DateInput.module.css';

type DateInputProps = {
  date: string;
  onClick: () => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function DateInput({ date, onClick, onBlur, onKeyDown, onChange }: DateInputProps) {
  return (
    <input
      data-testid='dateInput'
      className={styles.dateInput}
      type='text'
      value={date}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      pattern='^(1[0-2]|0?[1-9])(\/|-)(3[01]|[12][0-9]|0?[1-9])(\/|-)([0-9]{2})?[0-9]{2}$'
      title='Enter the date in this format: MM/DD/YYYY or MM-DD-YYYY'
      tabIndex={0}
    />
  );
}

export default DateInput;
