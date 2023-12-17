import {
  eachDayOfInterval,
  endOfWeek,
  format,
  getDaysInMonth,
  isFirstDayOfMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  CalendarDate,
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

export function getWeekDays(pattern: DayNamePattern = 'eeeeee', firstDayofWeek: DayNumber = 1) {
  const now = new Date();
  const weekDays: string[] = [];
  const start = startOfWeek(now, { weekStartsOn: firstDayofWeek });
  const end = endOfWeek(now, { weekStartsOn: firstDayofWeek });

  eachDayOfInterval({ start, end }).forEach((day) => {
    weekDays.push(format(day, pattern));
  });

  return weekDays;
}

export function parseDateString(dateString: string): CalendarDate {
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

export function getFirstDayMonth(date: Date) {
  if (isFirstDayOfMonth(date)) {
    return date.getDay();
  }
  return startOfMonth(date).getDay();
}
