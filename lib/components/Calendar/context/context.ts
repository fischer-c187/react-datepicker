import { createContext } from 'react';
import { DateParts } from '../../../interfaces/commonTypes';
import { CalendarActions } from '../reducer/CalendarReducer';

type CalendarContextType = {
  dateParts: DateParts;
  dispatch: React.Dispatch<CalendarActions>;
  date: string;
  onClickNewDate: (newDate: string) => void;
};

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export default CalendarContext;
