import { useEffect, useState } from 'react';
import { isValidDateString } from '../utils/date';

/**
 * Custom hook to manage the last valid date.
 *
 * This hook provides functionalities to manage the last valid date and update it when a new valid date is received.
 *
 * @param {string} date - Date string to validate and manage.
 * @returns {string} - Last valid date.
 */
function useLastValidateDate(date: string) {
  const [lastValideDate, setLastValideDate] = useState(isValidDateString(date) ? date : '');

  useEffect(() => {
    if (isValidDateString(date)) {
      setLastValideDate(date);
    }
  }, [date]);

  return lastValideDate;
}

export default useLastValidateDate;
