import { useState } from 'react';
import { Datepicker } from '../lib/main';
import styles from './App.module.css';

function App() {
  const [date, setDate] = useState('');

  return (
    <div className={styles.inputWrapper}>
      <Datepicker date={date} updateDateState={setDate} />
    </div>
  );
}

export default App;
