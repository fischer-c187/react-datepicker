# Datepicker Project

This project features a Datepicker component that enables users to select dates using an interactive calendar.

## Using the Datepicker Component

```tsx
function MyComponent() {
  const [date, setDate] = useState('');

  return (
    <div>
      <Datepicker date={date} updateDateState={setDate} />
    </div>
  );
}
```

## Customizing the Calendar Component

You can pass a custom Calendar component as a prop to Datepicker. Your custom Calendar component should accept the same props as the default Calendar:

```tsx
type CalendarProps = {
  date: string;
  onClickNewDate: (newDate: string) => void;
};
```

Exemple :

```tsx
function DefaultCalendar({ date, onClickNewDate }: CalendarProps) {
  return (
    <Calendar date={date} onClickNewDate={onClickNewDate}>
      <div className={styles.header}>
        <Calendar.YearSelection />
        <Calendar.MonthSelection />
      </div>
      <Calendar.WeekDayLabels />
      <Calendar.Days />
    </Calendar>
  );
}
```
