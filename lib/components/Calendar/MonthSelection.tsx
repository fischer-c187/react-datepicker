import { useContext } from 'react';
import Selector from '../Selector/Selector';
import { getMonthName } from '../../utils/date';
import CalendarContext from './context/context';
import { calendarReducerAction } from './reducer/CalendarReducer';

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
