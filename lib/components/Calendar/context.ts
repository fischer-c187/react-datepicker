import { createContext } from 'react';
import { CalendarDate } from '../../interfaces/commonTypes';

type CalendarContextType = {
  calendarDate: CalendarDate;
  setCalendarDate: React.Dispatch<React.SetStateAction<CalendarDate>>;
  onClickNewDate: React.Dispatch<React.SetStateAction<string>>;
};

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export default CalendarContext;
