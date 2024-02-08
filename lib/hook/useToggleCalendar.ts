import { useEffect, useState } from 'react';

/**
 * Custom hook to manage the display state of the calendar.
 *
 * This hook provides functionalities to manage the display state of the calendar and provides
 * functionalities to toggle and open the calendar.
 *
 * @param {React.RefObject<HTMLDivElement>} parentRef - Reference to the parent element.
 * @returns {Object} - Display state and functionalities to toggle and open the calendar.
 */
function useToggleCalendar(parentRef: React.RefObject<HTMLDivElement>) {
  const [displayCalendar, setDisplayCalendar] = useState(false);

  function openCalendar() {
    setDisplayCalendar(true);
  }

  function toggleCalendar() {
    setDisplayCalendar((lastState) => !lastState);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (parentRef.current && !parentRef.current.contains(event.target as Node)) {
        setDisplayCalendar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [parentRef]);

  return {
    displayCalendar,
    toggleCalendar,
    openCalendar,
  };
}

export default useToggleCalendar;
