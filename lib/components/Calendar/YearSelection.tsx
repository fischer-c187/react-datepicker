import { useCallback, useContext } from 'react';
import Selector from '../Selector/Selector';
import CalendarContext from './context/context';
import { calendarReducerAction } from './reducer/CalendarReducer';

type YearSelectionProps = {
  yearMin?: number;
  yearMax?: number;
};

/**
 * YearSelection component displaying the current year.
 *
 * This component is a child of the Calendar component and displays the current year. It utilizes the
 * `CalendarContext` to access the current date and provides functionalities to handle year changes.
 * The component uses the `Selector` component to render the year and handle year changes.
 *
 * @param {YearSelectionProps} props - Props including 'yearMin' and 'yearMax'.
 * @param {number} [props.yearMin=0] - The minimum year that can be selected.
 * @param {number} [props.yearMax=3000] - The maximum year that can be selected.
 */
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
