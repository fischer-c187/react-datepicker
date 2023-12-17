import { useCallback, useContext } from 'react';
import Selector from '../Selector/Selector';
import CalendarContext from './context';

type YearSelectionProps = {
  yearMin?: number;
  yearMax?: number;
};

function YearSelection({ yearMin = 0, yearMax = 3000 }: YearSelectionProps) {
  const context = useContext(CalendarContext);

  const previousMonth = useCallback(() => {
    if (context) {
      context.setCalendarDate((previousCalendar) => {
        const newYear = previousCalendar.year === yearMin ? yearMin : previousCalendar.year - 1;
        return { ...previousCalendar, year: newYear };
      });
    }
  }, [yearMin, context]);

  const nextMonth = useCallback(() => {
    if (context) {
      context.setCalendarDate((previousCalendar) => {
        const newYear = previousCalendar.year === yearMax ? yearMax : previousCalendar.year + 1;
        return { ...previousCalendar, year: newYear };
      });
    }
  }, [yearMax, context]);

  if (!context) {
    return null;
  }

  return (
    <Selector
      element={String(context.calendarDate.year)}
      previousHandleClick={previousMonth}
      nextHandleClick={nextMonth}
    />
  );
}

export default YearSelection;
