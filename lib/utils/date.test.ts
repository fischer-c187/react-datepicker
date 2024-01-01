import { describe, expect, it } from 'vitest';
import {
  areDatesEqual,
  getDaysNumberArray,
  getFirstDayMonth,
  getMonthName,
  getWeekDays,
  isValidDateString,
  numbersOfDaysInMonth,
  parseDateString,
} from './date';

describe('#date', () => {
  describe('isValidDateString', () => {
    it('should return false if dateString is undefined', () => {
      expect(isValidDateString(undefined)).toBe(false);
    });
    it('should return false if dateString is not a valid date string', () => {
      expect(isValidDateString('invalid')).toBe(false);
    });
    it('should return true if dateString is a valid date string', () => {
      expect(isValidDateString('2021-09-01')).toBe(true);
    });
  });

  describe('getMonthName', () => {
    it('should return the month name', () => {
      expect(getMonthName(0)).toBe('Jan');
    });
    it('should return the month name with the given pattern', () => {
      expect(getMonthName(0, 'MMMM')).toBe('January');
    });
  });

  describe('getWeekDays', () => {
    it('should return the week days', () => {
      expect(getWeekDays()).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    });
    it('should return the week days with the given pattern', () => {
      expect(getWeekDays('eeee')).toEqual([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]);
    });
    it('should return the week days with the given first day of week', () => {
      expect(getWeekDays('eee', 0)).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    });
  });

  describe('parseDateString', () => {
    it('should return the date parts if date is a valid string', () => {
      expect(parseDateString('2021-09-01')).toEqual({
        day: 1,
        month: 8,
        year: 2021,
      });
    });

    it('should return the current date parts if date is not a valid string', () => {
      const today = new Date();
      expect(parseDateString('invalid')).toEqual({
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
      });
    });
  });

  describe('numberOfDaysInMonth', () => {
    it('should return the number of days in a month', () => {
      expect(numbersOfDaysInMonth(new Date(2021, 8))).toBe(30);
    });
  });

  describe('getDaysNumberArray', () => {
    it('should return an array with all numbers of days in a month', () => {
      expect(getDaysNumberArray(new Date(2021, 8))).toEqual(
        Array.from({ length: 30 }, (_, i) => i + 1),
      );
    });
  });

  describe('getFirstDayMonth', () => {
    it('should return the first day of the month', () => {
      expect(getFirstDayMonth(new Date(2023, 9))).toBe(7);
    });

    it('should return the first day of the month with the given first day of week', () => {
      expect(getFirstDayMonth(new Date(2023, 11), 0)).toBe(6);
    });
  });

  describe('areDatesEqual', () => {
    it('should return true if dates are equal', () => {
      expect(areDatesEqual(new Date(2021, 8, 1), new Date(2021, 8, 1))).toBe(true);
    });
    it('should return false if dates are not equal', () => {
      expect(areDatesEqual(new Date(2021, 8, 1), new Date(2021, 8, 2))).toBe(false);
    });
  });
});
