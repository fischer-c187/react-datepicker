import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDaysInMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  DateParts,
  DayNamePattern,
  DayNumber,
  MonthNamePattern,
  MonthNumber,
} from '../interfaces/commonTypes';

export function isValidDateString(dateString: string | undefined) {
  if (!dateString) {
    return false;
  }

  const timestamp = Date.parse(dateString);

  return !Number.isNaN(timestamp);
}

export function getMonthName(monthNumber: MonthNumber, monthPattern: MonthNamePattern = 'MMM') {
  const date = new Date(2023, monthNumber);
  return format(date, monthPattern);
}

export function getWeekDays(pattern: DayNamePattern = 'eee', firstDayofWeek: DayNumber = 1) {
  const now = new Date();
  const weekDays: string[] = [];
  const start = startOfWeek(now, { weekStartsOn: firstDayofWeek });
  const end = endOfWeek(now, { weekStartsOn: firstDayofWeek });

  eachDayOfInterval({ start, end }).forEach((day) => {
    weekDays.push(format(day, pattern));
  });

  return weekDays;
}

export function parseDateString(dateString: string): DateParts {
  if (isValidDateString(dateString)) {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.getMonth() as MonthNumber,
      year: date.getFullYear(),
    };
  }

  const now = new Date();
  return {
    day: now.getDate(),
    month: now.getMonth() as MonthNumber,
    year: now.getFullYear(),
  };
}

export function numbersOfDaysInMonth(date: Date) {
  return getDaysInMonth(date);
}

export function getDaysNumberArray(date: Date) {
  return Array.from({ length: numbersOfDaysInMonth(date) }, (_value, index) => index + 1);
}

export function getFirstDayMonth(date: Date, firstDayOfWeek: DayNumber = 1) {
  const firstDay = startOfMonth(date).getDay();
  return (firstDay < firstDayOfWeek ? 7 : 0) + firstDay - firstDayOfWeek + 1;
}

export function areDatesEqual(date1: Date, date2: Date) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
