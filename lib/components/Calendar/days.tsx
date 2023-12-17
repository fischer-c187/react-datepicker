import { useContext } from 'react';
import CalendarContext from './context';
import { getDaysNumberArray, getFirstDayMonth } from '../../utils/date';
import styles from './Calendar.module.css';

function Days() {
  const context = useContext(CalendarContext);

  if (!context) return null;

  const { calendarDate } = context;
  const date = new Date(calendarDate.year, calendarDate.month);
  const days = getDaysNumberArray(date);
  const firstDayColumn = getFirstDayMonth(date);

  function onClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.target instanceof HTMLElement) {
      const div = event.target.closest('[data-day]');
      if (div) {
        const day = div.getAttribute('data-day');
        context?.onClickNewDate(`${calendarDate.month + 1}/${day}/${calendarDate.year}`);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.target instanceof HTMLElement) {
      const div = event.target.closest('[data-day]');
      if (div) {
        const day = div.getAttribute('data-day');
        context?.onClickNewDate(`${calendarDate.month + 1}/${day}/${calendarDate.year}`);
      }
    }
  }

  return (
    <div
      className={styles.gridWeek}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role='grid'
      tabIndex={0}
    >
      {days.map((day, index) => (
        <div
          data-day={day}
          className={styles.days}
          key={day}
          style={index === 0 ? { gridColumnStart: firstDayColumn } : undefined}
          tabIndex={0}
          role='button'
        >
          <p>{day}</p>
        </div>
      ))}
    </div>
  );
}
export default Days;
