export type CalendarProps = {
  date: string;
  onClickNewDate: (newDate: string) => void;
};

export type DatepickerProps = {
  date: string;
  updateDateState: React.Dispatch<React.SetStateAction<string>>;
  Calendar?: React.ElementType<CalendarProps>;
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
};
