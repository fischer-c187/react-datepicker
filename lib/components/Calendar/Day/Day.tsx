import styles from './Day.module.css';

type DayProps = {
  day: number;
  style?: React.CSSProperties;
  active?: boolean;
};

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
