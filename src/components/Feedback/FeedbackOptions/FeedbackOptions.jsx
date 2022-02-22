import styles from './feedback-options.module.css'
import PropTypes from 'prop-types'
import {memo} from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    const elements = Object.keys(options).map(option => <li key={option}><button className={styles.btn} onClick={()=>onLeaveFeedback(option)}>{option}</button></li>)
    return (
        <div className={styles.feedback}>
        <h2 className={styles.title}>Please leave feedback</h2>
        <ul className={styles.buttonList}>
          {elements}
        </ul>
      </div>
    )
}

export default memo(FeedbackOptions);

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}


