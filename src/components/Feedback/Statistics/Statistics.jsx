import styles from './statistics.module.css'

import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className={styles.statistics}>
      <ul>
        <li className={styles.statisticsItem}>
          <p className={styles.text}>Good: {good}</p>
        </li>
        <li className={styles.statisticsItem}>
          <p className={styles.text}>Neutral: {neutral}</p>
        </li>
        <li className={styles.statisticsItem}>
          <p className={styles.text}>Bad: {bad}</p>
        </li>
        <li className={styles.statisticsItem}>
          <p className={styles.text}>Total: {total}</p>
        </li>
        <li className={styles.statisticsItem}>
          <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}
