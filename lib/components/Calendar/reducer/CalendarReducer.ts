import { DateParts, MonthNumber } from '../../../interfaces/commonTypes';

export const calendarReducerAction = {
  SET_DATE: 'SET_DATE',
  PREVIOUS_MONTH: 'PREVIOUS_MONTH',
  NEXT_MONTH: 'NEXT_MONTH',
  PREVIOUS_YEAR: 'PREVIOUS_YEAR',
  NEXT_YEAR: 'NEXT_YEAR',
} as const;

export type CalendarActionType = keyof typeof calendarReducerAction;

export type CalendarActions = {
  type: CalendarActionType;
  payload?: Partial<DateParts>;
};

export const calendarReducer = (state: DateParts, action: CalendarActions): DateParts => {
  switch (action.type) {
    case calendarReducerAction.SET_DATE:
      return {
        ...state,
        ...action.payload,
      };
    case calendarReducerAction.PREVIOUS_MONTH: {
      return {
        ...state,
        month: state.month === 0 ? 11 : ((state.month - 1) as MonthNumber),
        year: state.month === 0 ? state.year - 1 : state.year,
      };
    }
    case calendarReducerAction.NEXT_MONTH:
      return {
        ...state,
        month: state.month === 11 ? 0 : ((state.month + 1) as MonthNumber),
        year: state.month === 11 ? state.year + 1 : state.year,
      };
    case calendarReducerAction.PREVIOUS_YEAR:
      return {
        ...state,
        year: state.year - 1,
      };
    case calendarReducerAction.NEXT_YEAR:
      return {
        ...state,
        year: state.year + 1,
      };
    default:
      return state;
  }
};
