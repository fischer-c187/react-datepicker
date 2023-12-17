import { getWeekDays } from '../../utils/date';
import styles from './Calendar.module.css';

function WeekDayLabels() {
  const days = getWeekDays();

  return (
    <div className={styles.gridWeek}>
      {days.map((day) => (
        <p key={day}>{day}</p>
      ))}
    </div>
  );
}

export default WeekDayLabels;
