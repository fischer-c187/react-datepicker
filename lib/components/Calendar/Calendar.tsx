import { useEffect, useMemo, useState } from 'react';
import styles from './Calendar.module.css';
import MonthSelection from './MonthSelection';
import WeekDayLabels from './WeekDayLabels';
import YearSelection from './YearSelection';
import { parseDateString } from '../../utils/date';
import CalendarContext from './context';
import Days from './days';

type CalendarProps = {
  date: string;
  onClickNewDate: React.Dispatch<React.SetStateAction<string>>;
};

function Calendar({ date, onClickNewDate }: CalendarProps) {
  const [calendarDate, setCalendarDate] = useState(() => parseDateString(date));

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
      <div className={styles.calendar}>
        <div className={styles.header}>
          <MonthSelection />
          <YearSelection />
        </div>
        <WeekDayLabels />
        <Days />
      </div>
    </CalendarContext.Provider>
  );
}

Calendar.MonthSelection = MonthSelection;

export default Calendar;
