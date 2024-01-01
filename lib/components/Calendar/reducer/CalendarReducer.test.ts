import { beforeEach, expect, describe, it } from 'vitest';
import { calendarReducer, calendarReducerAction } from './CalendarReducer';
import { DateParts } from '../../../interfaces/commonTypes';

describe('CalendarReducer', () => {
  let initialState: DateParts;
  beforeEach(() => {
    initialState = {
      month: 0,
      year: 2023,
      day: 0,
    };
  });
  it('should return the initial state when the action type is unrecognized', () => {
    // @ts-ignore
    expect(calendarReducer(initialState, { type: 'undefined' })).toEqual(initialState);
  });

  it('should return the new date when the action type is SET_DATE', () => {
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.SET_DATE,
        payload: { month: 1, year: 2020 },
      }),
    ).toEqual({
      month: 1,
      year: 2020,
      day: 0,
    });
  });

  it('should return December of the previous year when the action type is PREVIOUS_MONTH and the current month is January', () => {
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.PREVIOUS_MONTH,
      }),
    ).toEqual({
      month: 11,
      year: 2022,
      day: 0,
    });
  });

  it('should return the previous month when the action type is PREVIOUS_MONTH and the current month is not January', () => {
    initialState.month = 2;
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.PREVIOUS_MONTH,
      }),
    ).toEqual({
      month: 1,
      year: 2023,
      day: 0,
    });
  });

  it('should return January of the next year when the action type is NEXT_MONTH and the current month is December', () => {
    initialState.month = 11;
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.NEXT_MONTH,
      }),
    ).toEqual({
      month: 0,
      year: 2024,
      day: 0,
    });
  });

  it('should return the next month when the action type is NEXT_MONTH and the current month is not December', () => {
    initialState.month = 2;
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.NEXT_MONTH,
      }),
    ).toEqual({
      month: 3,
      year: 2023,
      day: 0,
    });
  });

  it('should return the previous year when the action type is PREVIOUS_YEAR', () => {
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.PREVIOUS_YEAR,
      }),
    ).toEqual({
      month: 0,
      year: 2022,
      day: 0,
    });
  });

  it('should return the next year when the action type is NEXT_YEAR', () => {
    expect(
      calendarReducer(initialState, {
        type: calendarReducerAction.NEXT_YEAR,
      }),
    ).toEqual({
      month: 0,
      year: 2024,
      day: 0,
    });
  });
});
