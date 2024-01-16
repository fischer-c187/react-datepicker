import { useCallback, useRef } from 'react';
import styles from './Datepicker.module.css';
import DefaultCalendar from '../Calendar/DefaultCalendar';
import { DatepickerProps } from '../../interfaces/componentsTypes';
import useLastValidateDate from '../../hook/useLastValidateDate';
import { isValidDateString } from '../../utils/date';
import useToggleCalendar from '../../hook/useToggleCalendar';
import DateInput from '../DateInput/DateInput';

/**
 * Datepicker component allowing users to select a date.
 *
 * This component utilizes a combination of custom hooks and components to provide a
 * comprehensive date picking functionality. It uses `useLastValidateDate` to track the last valid date,
 * `useToggleCalendar` to manage the display state of the calendar, and a `DateInput` component for
 * input handling. The component ensures date validity and provides functionalities to toggle
 * and handle calendar view. `Datepicker` accepts props to control the date state and optionally
 * override the default Calendar component.
 *
 * @param {DatepickerProps} props - Props including 'date', 'updateDateState', and an optional 'Calendar' component.
 */
function Datepicker({
  date,
  updateDateState,
  Calendar = DefaultCalendar,
  className,
  id,
  name,
  placeholder,
  pattern,
  title,
  required,
}: DatepickerProps) {
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
    <div className={styles.inputWrapper} ref={datepickerRef} data-testid='datepicker'>
      <DateInput
        date={date}
        onClick={openCalendar}
        onBlur={validateOrResetDate}
        onKeyDown={handleKeyDownToggleCalendar}
        onChange={(event) => updateDateState(event.target.value)}
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required={required}
      />
      {displayCalendar && <Calendar date={date} onClickNewDate={handleNewDate} />}
    </div>
  );
}

export default Datepicker;
