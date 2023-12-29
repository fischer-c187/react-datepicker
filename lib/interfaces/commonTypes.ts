export type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type MonthNamePattern = 'M' | 'MM' | 'MMM' | 'MMMM' | 'MMMMM';

export type DayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DayNamePattern = 'eee' | 'eeee' | 'eeeee' | 'eeeeee';

export type DateParts = {
  day: number;
  month: MonthNumber;
  year: number;
};
