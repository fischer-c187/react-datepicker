import { CalendarProps } from '../../interfaces/componentsTypes';
import Calendar from './Calendar';
import styles from './Calendar.module.css';

function DefaultCalendar({ date, onClickNewDate }: CalendarProps) {
  return (
    <Calendar date={date} onClickNewDate={onClickNewDate}>
      <Calendar.WeekDayLabels />
      <Calendar.Days />
      <div className={styles.header}>
        <Calendar.YearSelection />
        <Calendar.MonthSelection />
      </div>
    </Calendar>
  );
}

export default DefaultCalendar;
