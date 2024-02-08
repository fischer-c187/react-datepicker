import { useContext } from 'react';
import Selector from '../Selector/Selector';
import { getMonthName } from '../../utils/date';
import CalendarContext from './context/context';
import { calendarReducerAction } from './reducer/CalendarReducer';

/**
 * MonthSelection component displaying the current month.
 *
 * This component is a child of the Calendar component and displays the current month. It utilizes the
 * `CalendarContext` to access the current date and provides functionalities to handle month changes.
 * The component uses the `Selector` component to render the month and handle month changes.
 */
function MonthSelection() {
  const context = useContext(CalendarContext);

  if (!context) {
    return null;
  }

  return (
    <Selector
      element={getMonthName(context.dateParts.month)}
      previousHandleClick={() => context.dispatch({ type: calendarReducerAction.PREVIOUS_MONTH })}
      nextHandleClick={() => context.dispatch({ type: calendarReducerAction.NEXT_MONTH })}
    />
  );
}

export default MonthSelection;
