import LeftArrow from '../../assets/angle-left.svg';
import RightArrow from '../../assets/angle-right.svg';
import styles from './Selector.module.css';

type SelectorProps = {
  element: string;
  previousHandleClick: () => void;
  nextHandleClick: () => void;
};

/**
 * Selector component for selecting an element.
 *
 * This component provides a selector to navigate through a list of elements. It displays the current
 * element and provides functionalities to handle the previous and next element.
 */
function Selector({ element, previousHandleClick, nextHandleClick }: SelectorProps) {
  return (
    <div className={styles.selectorWrapper}>
      <button
        data-testid='previousButton'
        type='button'
        onClick={previousHandleClick}
        className={styles.button}
      >
        <img src={LeftArrow} alt='precedent Element' />
      </button>
      <span className={styles.text}>{element}</span>
      <button
        data-testid='nextButton'
        onClick={nextHandleClick}
        className={styles.button}
        type='button'
      >
        <img src={RightArrow} alt='next Element' />
      </button>
    </div>
  );
}

export default Selector;
