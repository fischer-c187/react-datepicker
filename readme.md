# Datepicker Project

The Datepicker component allows users to select a date, built using React and custom hooks to provide full date picking functionality. This component is perfect for integration into forms or user interfaces where precise date input is required.

## Installation

To use the Datepicker component in your project, start by installing it via npm:

```bash
npm install @drskyjs/datepicker
```

## Using the Datepicker Component

```tsx
function MyComponent() {
  const [date, setDate] = useState('');

  const updateDateState = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Datepicker date={date} updateDateState={updateDateState} placeholder='Select a date' />
    </div>
  );
}
```

## Props

The `Datepicker` component accepts the following props for customization:

- **date (string)**: The currently selected date.
- **updateDateState (function)**: Function to update the date state.
- **Calendar (component, optional**): A custom Calendar component to replace the default one.
- **className, id, name, placeholder, pattern, title, required (string, optional)**: Standard attributes for the date input element.
- **innerRef (ref, optional)**: Reference to pass to the date input component for direct access.

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
