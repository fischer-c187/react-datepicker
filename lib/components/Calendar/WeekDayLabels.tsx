import { getWeekDays } from '../../utils/date';
import styles from './Calendar.module.css';

/**
 * WeekDayLabels component displaying the days of the week.
 *
 * This component is a child of the Calendar component and displays the days of the week in a grid
 * format. It utilizes the `getWeekDays` function to retrieve the days of the week and renders them
 * as individual labels.
 */
function WeekDayLabels() {
  const days = getWeekDays();

  return (
    <div className={`${styles.gridWeek} ${styles.weekLabels}`}>
      {days.map((day) => (
        <p key={day}>{day}</p>
      ))}
    </div>
  );
}

export default WeekDayLabels;
