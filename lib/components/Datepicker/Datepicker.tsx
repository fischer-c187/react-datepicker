import { useState } from 'react';
import styles from './Datepicker.module.css';
import Calendar from '../Calendar/Calendar';
import { isValidDateString } from '../../utils/date';

type DatepickerProps = {
  date: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function Datepicker({ date, onChange }: DatepickerProps) {
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [lastValideDate, setLastValideDate] = useState(isValidDateString(date) ? date : '');

  function handleBlur() {
    if (isValidDateString(date)) {
      setLastValideDate(date);
    } else {
      onChange(lastValideDate);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    event.preventDefault();
    setDisplayCalendar((lastState) => (!lastState ? !lastState : lastState));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setDisplayCalendar((lastState) => !lastState);
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        type='text'
        value={date}
        onChange={(event) => onChange(event.target.value)}
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        pattern='^(1[0-2]|0?[1-9])(\/|-)(3[01]|[12][0-9]|0?[1-9])(\/|-)([0-9]{2})?[0-9]{2}$'
        title='Enter the date in this format: MM/DD/YYYY or MM-DD-YYYY'
        tabIndex={0}
      />
      {displayCalendar && <Calendar date={date} onClickNewDate={onChange} />}
    </div>
  );
}

export default Datepicker;
