import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import Datepicker from './Datepicker';

function DatePickerForTest({ dateString }: { dateString: string }) {
  const [date, setDate] = useState(dateString);

  return <Datepicker date={date} updateDateState={setDate} />;
}

describe('#Datepicker', () => {
  it('should render without crashing', async () => {
    render(<Datepicker date='2/1/2022' updateDateState={() => {}} />);

    const datepicker = screen.getByTestId('datepicker');
    expect(datepicker).toBeInTheDocument();
  });

  it('should render date input', async () => {
    render(<Datepicker date='2/1/2022' updateDateState={() => {}} />);

    const input = screen.getByTestId('dateInput');
    expect(input).toBeInTheDocument();
  });

  it('should not render calendar at start', async () => {
    render(<Datepicker date='2/1/2022' updateDateState={() => {}} />);

    const calendar = screen.queryByTestId('calendar');
    expect(calendar).not.toBeInTheDocument();
  });

  it('should render calendar when press enter on input', async () => {
    render(<Datepicker date='2/1/2022' updateDateState={() => {}} />);

    const input = screen.getByTestId('dateInput');
    await userEvent.type(input, '{enter}');

    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });

  it('should render calendar when click on input', async () => {
    render(<Datepicker date='2/1/2022' updateDateState={() => {}} />);

    const input = screen.getByTestId('dateInput');
    await userEvent.click(input);

    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });

  it('should use last valid date when input is invalid', async () => {
    render(<DatePickerForTest dateString='2/1/2001' />);

    const input = screen.getByTestId('dateInput') as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, 'invalid');
    await userEvent.click(document.body);
    screen.debug();
    expect(input.value).toEqual('2/1/2001');
  });

  it('should update date when click on day', async () => {
    render(<DatePickerForTest dateString='2/1/2001' />);

    const input = screen.getByTestId('dateInput') as HTMLInputElement;
    await userEvent.click(input);
    const day = screen.getByText('2');
    await userEvent.click(day);

    expect(day).not.toBeInTheDocument();
    expect(input.value).toEqual('2/2/2001');
  });
});
