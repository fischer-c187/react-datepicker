import { useState } from 'react';
import Datepicker from '../lib/components/Datepicker/Datepicker';
import styles from './App.module.css';

function App() {
  const [date, setDate] = useState('');

  return (
    <div className={styles.inputWrapper}>
      <Datepicker date={date} onChange={setDate} />
    </div>
  );
}

export default App;
