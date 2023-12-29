import { PropsWithChildren, useMemo } from 'react';
import CalendarContext from './context/context';
import MonthSelection from './MonthSelection';
import WeekDayLabels from './WeekDayLabels';
import YearSelection from './YearSelection';
import Days from './days';
import styles from './Calendar.module.css';
import useDateParts from '../../hook/useDateParts';

type CalendarProps = PropsWithChildren<{
  date: string;
  onClickNewDate: (newDate: string) => void;
}>;

function Calendar({ date, onClickNewDate, children }: CalendarProps) {
  const [dateParts, dispatch] = useDateParts(date);

  const contextValue = useMemo(
    () => ({
      dateParts,
      dispatch,
      date,
      onClickNewDate,
    }),
    [dateParts, dispatch, onClickNewDate, date],
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      <div className={styles.calendar}>{children}</div>
    </CalendarContext.Provider>
  );
}

Calendar.MonthSelection = MonthSelection;
Calendar.YearSelection = YearSelection;
Calendar.WeekDayLabels = WeekDayLabels;
Calendar.Days = Days;

export default Calendar;
