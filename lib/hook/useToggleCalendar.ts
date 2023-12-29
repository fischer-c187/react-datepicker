import { useEffect, useState } from 'react';

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
