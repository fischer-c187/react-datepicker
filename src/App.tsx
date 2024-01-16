import { useState } from 'react';
import { Datepicker } from '../lib/main';
import styles from './App.module.css';

function App() {
  const [date, setDate] = useState('');

  return (
    <div className={styles.inputWrapper}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor='datepicker'>Date</label>
      <Datepicker date={date} placeholder='MM/dd/YYYY' updateDateState={setDate} id='datepicker' />
    </div>
  );
}

export default App;
