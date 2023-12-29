import { CalendarProps } from '../../interfaces/componentsTypes';
import Calendar from './Calendar';
import styles from './Calendar.module.css';

function DefaultCalendar({ date, onClickNewDate }: CalendarProps) {
  return (
    <Calendar date={date} onClickNewDate={onClickNewDate}>
      <div className={styles.header}>
        <Calendar.YearSelection />
        <Calendar.MonthSelection />
      </div>
      <Calendar.WeekDayLabels />
      <Calendar.Days />
    </Calendar>
  );
}

export default DefaultCalendar;
