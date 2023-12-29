import { useEffect, useState } from 'react';
import { isValidDateString } from '../utils/date';

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
