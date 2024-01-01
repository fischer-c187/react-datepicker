import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Days from './days';
import CalendarContext from './context/context';
import { DateParts } from '../../interfaces/commonTypes';
import MonthSelection from './MonthSelection';
import YearSelection from './YearSelection';
import WeekDayLabels from './WeekDayLabels';
import Calendar from './Calendar';

const createContextValue = (
  date: string,
  dateParts: DateParts = {
    year: 2022,
    month: 1,
    day: 1,
  },
) => ({
  dateParts,
  dispatch: vi.fn(),
  date,
  onClickNewDate: vi.fn(),
});

describe('#Days', () => {
  const renderDaysComponent = (date: string) => {
    const contextValue = createContextValue(date);

    render(
      <CalendarContext.Provider value={contextValue}>
        <Days />
      </CalendarContext.Provider>,
    );

    return contextValue;
  };

  it('should render without crashing', async () => {
    renderDaysComponent('2/1/2022');

    const days = screen.getByText('28');
    expect(days).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(28);
  });

  it('should call onClickNewDate when click on a day', async () => {
    const contextValue = renderDaysComponent('1/1/2022');

    const firstDay = screen.getByText('1');
    await userEvent.click(firstDay);

    expect(contextValue.onClickNewDate).toHaveBeenCalledWith('2/1/2022');
  });

  it('should call onClickNewDate when press enter on a day', async () => {
    const contextValue = renderDaysComponent('1/1/2022');

    const firstDay = screen.getByText('1');
    await userEvent.type(firstDay, '{enter}');

    expect(contextValue.onClickNewDate).toHaveBeenCalledWith('2/1/2022');
  });

  it('should add a class activeDays when the day is the same as the date', async () => {
    renderDaysComponent('2/1/2022');

    const firstDaySpan = screen.getByText('1');
    const firstDayElement = firstDaySpan.closest('[data-day]');

    expect(firstDayElement).toBeTruthy();
    expect(firstDayElement?.className).toMatch(/activeDays/);
  });

  it('should return null when context is null', async () => {
    render(<Days />);

    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });
});

describe('#MonthSelection', () => {
  it('should render without crashing', async () => {
    render(
      <CalendarContext.Provider value={createContextValue('2/1/2022')}>
        <MonthSelection />
      </CalendarContext.Provider>,
    );

    const monthSelection = screen.getByText('Feb');
    expect(monthSelection).toBeInTheDocument();
  });

  it('should call dispatch when click on previous button', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <MonthSelection />
      </CalendarContext.Provider>,
    );

    const previousButton = screen.getByTestId('previousButton');
    await userEvent.click(previousButton);
    expect(contextValue.dispatch).toHaveBeenCalled();
  });

  it('should call dispatch when click on next button', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <MonthSelection />
      </CalendarContext.Provider>,
    );

    const nextButton = screen.getByTestId('nextButton');
    await userEvent.click(nextButton);
    expect(contextValue.dispatch).toHaveBeenCalled();
  });

  it('should return null when context is null', async () => {
    render(<MonthSelection />);

    expect(screen.queryByText('Feb')).not.toBeInTheDocument();
  });
});

describe('#YearSelection', () => {
  it('should render without crashing', async () => {
    render(
      <CalendarContext.Provider value={createContextValue('2/1/2022')}>
        <YearSelection />
      </CalendarContext.Provider>,
    );

    const yearSelection = screen.getByText('2022');
    expect(yearSelection).toBeInTheDocument();
  });

  it('should call dispatch when click on previous button', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <YearSelection />
      </CalendarContext.Provider>,
    );

    const previousButton = screen.getByTestId('previousButton');
    await userEvent.click(previousButton);
    expect(contextValue.dispatch).toHaveBeenCalled();
  });

  it('should call dispatch when click on next button', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <YearSelection />
      </CalendarContext.Provider>,
    );

    const nextButton = screen.getByTestId('nextButton');
    await userEvent.click(nextButton);
    expect(contextValue.dispatch).toHaveBeenCalled();
  });

  it('should not call dispatch when click on previous button and year is equal to yearMin', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <YearSelection yearMin={2022} />
      </CalendarContext.Provider>,
    );

    const previousButton = screen.getByTestId('previousButton');
    await userEvent.click(previousButton);
    expect(contextValue.dispatch).not.toHaveBeenCalled();
  });

  it('should not call dispatch when click on next button and year is equal to yearMax', async () => {
    const contextValue = createContextValue('2/1/2022');
    render(
      <CalendarContext.Provider value={contextValue}>
        <YearSelection yearMax={2022} />
      </CalendarContext.Provider>,
    );

    const nextButton = screen.getByTestId('nextButton');
    await userEvent.click(nextButton);
    expect(contextValue.dispatch).not.toHaveBeenCalled();
  });

  it('should return null when context is null', async () => {
    render(<YearSelection />);

    expect(screen.queryByText('2022')).not.toBeInTheDocument();
  });
});

describe('#weekDayLabels', () => {
  it('should render without crashing', async () => {
    render(
      <CalendarContext.Provider value={createContextValue('2/1/2022')}>
        <WeekDayLabels />
      </CalendarContext.Provider>,
    );

    const weekDayLabels = screen.getByText('Sun');
    expect(weekDayLabels).toBeInTheDocument();
  });
});

describe('#Calendar', () => {
  it('should render without crashing', async () => {
    render(<Calendar date='2/1/2022' onClickNewDate={vi.fn()} />);

    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });

  it('should render children', async () => {
    render(
      <Calendar date='2/1/2022' onClickNewDate={vi.fn()}>
        <div>children</div>
      </Calendar>,
    );

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});
