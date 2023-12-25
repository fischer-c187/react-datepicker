import { useCallback, useRef } from 'react';
import styles from './Datepicker.module.css';
import DefaultCalendar from '../Calendar/DefaultCalendar';
import { DatepickerProps } from '../../interfaces/componentsTypes';
import useLastValidateDate from '../../hook/useLastValidateDate';
import { isValidDateString } from '../../utils/date';
import useToggleCalendar from '../../hook/useToggleCalendar';
import DateInput from '../DateInput/DateInput';

function Datepicker({ date, updateDateState, Calendar = DefaultCalendar }: DatepickerProps) {
  const datepickerRef = useRef<HTMLDivElement>(null);

  const lastValidDate = useLastValidateDate(date);
  const { displayCalendar, toggleCalendar, openCalendar } = useToggleCalendar(datepickerRef);

  const handleNewDate = useCallback(
    (newDate: string) => {
      updateDateState(newDate);
      toggleCalendar();
    },
    [updateDateState, toggleCalendar],
  );

  const handleKeyDownToggleCalendar = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        openCalendar();
      }
    },
    [openCalendar],
  );

  const validateOrResetDate = useCallback(() => {
    if (!isValidDateString(date)) {
      updateDateState(lastValidDate);
    }
  }, [date, updateDateState, lastValidDate]);

  return (
    <div className={styles.inputWrapper} ref={datepickerRef}>
      <DateInput
        date={date}
        onClick={openCalendar}
        onBlur={validateOrResetDate}
        onKeyDown={handleKeyDownToggleCalendar}
        onChange={(event) => updateDateState(event.target.value)}
      />
      {displayCalendar && <Calendar date={date} onClickNewDate={handleNewDate} />}
    </div>
  );
}

export default Datepicker;
