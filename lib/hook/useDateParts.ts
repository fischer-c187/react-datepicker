import { useEffect, useReducer } from 'react';
import { parseDateString } from '../utils/date';
import { DateParts } from '../interfaces/commonTypes';
import {
  CalendarActions,
  calendarReducer,
  calendarReducerAction,
} from '../components/Calendar/reducer/CalendarReducer';

function useDateParts(date: string): [DateParts, React.Dispatch<CalendarActions>] {
  // const [dateParts, setDateParts] = useState(() => parseDateString(date));
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
