import styles from './Day.module.css';

type DayProps = {
  day: number;
  style?: React.CSSProperties;
  active?: boolean;
};

/**
 * Day component for rendering a single day in the calendar.
 *
 * This component is a child of the Calendar component and provides a single day element
 * with a number representing the day of the month. It also provides a style prop to customize
 * the appearance of the day and an active prop to indicate if the day is active or not.
 */
function Day({ day, style = {}, active = false }: DayProps) {
  return (
    <div
      data-day={day}
      className={`${active ? styles.activeDays : ''} ${styles.days}`}
      style={style}
      tabIndex={0}
      role='button'
    >
      <span>{day}</span>
    </div>
  );
}

export default Day;
