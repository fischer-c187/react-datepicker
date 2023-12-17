import { useCallback, useContext } from 'react';
import { MonthNumber } from '../../interfaces/commonTypes';
import Selector from '../Selector/Selector';
import { getMonthName } from '../../utils/date';
import CalendarContext from './context';

function MonthSelection() {
  const context = useContext(CalendarContext);

  const previousMonth = useCallback(() => {
    if (context) {
      context.setCalendarDate((previousCalendar) => {
        const newMonthNumber = previousCalendar.month === 0 ? 11 : previousCalendar.month - 1;
        return { ...previousCalendar, month: newMonthNumber as MonthNumber };
      });
    }
  }, [context]);

  const nextMonth = useCallback(() => {
    if (context) {
      context.setCalendarDate((previousCalendar) => {
        const newMonthNumber = previousCalendar.month === 11 ? 0 : previousCalendar.month + 1;
        return { ...previousCalendar, month: newMonthNumber as MonthNumber };
      });
    }
  }, [context]);

  if (!context) {
    return null;
  }

  return (
    <Selector
      element={getMonthName(context.calendarDate.month)}
      previousHandleClick={previousMonth}
      nextHandleClick={nextMonth}
    />
  );
}

export default MonthSelection;
