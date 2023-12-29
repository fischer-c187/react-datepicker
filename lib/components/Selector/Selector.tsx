import LeftArrow from '../../assets/angle-left.svg';
import RightArrow from '../../assets/angle-right.svg';
import styles from './Selector.module.css';

type SelectorProps = {
  element: string;
  previousHandleClick: () => void;
  nextHandleClick: () => void;
};

function Selector({ element, previousHandleClick, nextHandleClick }: SelectorProps) {
  return (
    <div className={styles.selectorWrapper}>
      <button type='button' onClick={previousHandleClick} className={styles.button}>
        <img src={LeftArrow} alt='precedent Element' />
      </button>
      <span className={styles.text}>{element}</span>
      <button onClick={nextHandleClick} className={styles.button} type='button'>
        <img src={RightArrow} alt='next Element' />
      </button>
    </div>
  );
}

export default Selector;
