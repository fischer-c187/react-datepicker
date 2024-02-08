import { useEffect, useReducer } from 'react';
import { parseDateString } from '../utils/date';
import { DateParts } from '../interfaces/commonTypes';
import {
  CalendarActions,
  calendarReducer,
  calendarReducerAction,
} from '../components/Calendar/reducer/CalendarReducer';

/**
 * Custom hook to manage date parts.
 *
 * This hook provides functionalities to manage date parts and dispatch actions to update the date state.
 * turn '11/25/2023' into { day: 25, month: 10, year: 2023 }
 *
 * @param {string} date - Date string to parse and manage.
 * @returns {[DateParts, React.Dispatch<CalendarActions>]} - Date parts and dispatch function.
 */
function useDateParts(date: string): [DateParts, React.Dispatch<CalendarActions>] {
  const [dateParts, dispatch] = useReducer(calendarReducer, parseDateString(date));

  useEffect(() => {
    dispatch({
      type: calendarReducerAction.SET_DATE,
      payload: parseDateString(date),
    });
  }, [date]);

  return [dateParts, dispatch];
}

export default useDateParts;
