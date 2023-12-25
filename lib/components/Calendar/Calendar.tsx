import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import CalendarContext from './context';
import MonthSelection from './MonthSelection';
import WeekDayLabels from './WeekDayLabels';
import YearSelection from './YearSelection';
import Days from './days';
import { parseDateString } from '../../utils/date';
import styles from './Calendar.module.css';

type CalendarProps = PropsWithChildren<{
  date: string;
  onClickNewDate: (newDate: string) => void;
}>;

function Calendar({ date, onClickNewDate, children }: CalendarProps) {
  const [calendarDate, setCalendarDate] = useState(() => parseDateString(date));

  // TODO: extraire la logique de validation de date dans un hook
  useEffect(() => {
    setCalendarDate(parseDateString(date));
  }, [date]);

  const contextValue = useMemo(
    () => ({
      calendarDate,
      setCalendarDate,
      onClickNewDate,
    }),
    [calendarDate, setCalendarDate, onClickNewDate],
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
