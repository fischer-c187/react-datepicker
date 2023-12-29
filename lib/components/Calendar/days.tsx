import { useContext } from 'react';
import CalendarContext from './context/context';
import { areDatesEqual, getDaysNumberArray, getFirstDayMonth } from '../../utils/date';
import styles from './Calendar.module.css';
import Day from './Day/Day';

function Days() {
  const context = useContext(CalendarContext);

  if (!context) {
    return null;
  }

  const { dateParts } = context;

  const date = new Date(dateParts.year, dateParts.month);
  const days = getDaysNumberArray(date);
  const firstDayColumn = getFirstDayMonth(date);

  function handleNewDate(target: HTMLElement) {
    const div = target.closest('[data-day]');
    if (div) {
      const day = div.getAttribute('data-day');
      context?.onClickNewDate(`${dateParts.month + 1}/${day}/${dateParts.year}`);
    }
  }

  function onClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (event.target instanceof HTMLElement) {
      handleNewDate(event.target);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Enter' && event.target instanceof HTMLElement) {
      handleNewDate(event.target);
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
        <Day
          day={day}
          active={areDatesEqual(
            new Date(dateParts.year, dateParts.month, day),
            new Date(context.date),
          )}
          key={day}
          style={index === 0 ? { gridColumnStart: firstDayColumn } : undefined}
        />
      ))}
    </div>
  );
}
export default Days;
