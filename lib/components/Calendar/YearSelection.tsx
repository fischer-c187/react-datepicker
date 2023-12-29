import { useCallback, useContext } from 'react';
import Selector from '../Selector/Selector';
import CalendarContext from './context/context';
import { calendarReducerAction } from './reducer/CalendarReducer';

type YearSelectionProps = {
  yearMin?: number;
  yearMax?: number;
};

function YearSelection({ yearMin = 0, yearMax = 3000 }: YearSelectionProps) {
  const context = useContext(CalendarContext);

  const year = context?.dateParts.year;

  const previousYear = useCallback(() => {
    if (year && year > yearMin) {
      context?.dispatch({ type: calendarReducerAction.PREVIOUS_YEAR });
    }
  }, [yearMin, year, context]);

  const nextYear = useCallback(() => {
    if (year && year < yearMax) {
      context?.dispatch({ type: calendarReducerAction.NEXT_YEAR });
    }
  }, [yearMax, year, context]);

  if (!context) {
    return null;
  }

  return (
    <Selector
      element={String(context.dateParts.year)}
      previousHandleClick={previousYear}
      nextHandleClick={nextYear}
    />
  );
}

export default YearSelection;
