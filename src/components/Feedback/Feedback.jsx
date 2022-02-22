
import React, { useState } from 'react';


import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section/Section';


const newState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {
  
const [feedback, setFeedback] = useState(newState);
 const addAttribute = (property) => {
      setFeedback(state => {
        const newFeedback = state[property]
        return {
          ...feedback,
            [property]: newFeedback + 1
        }
    })

    
  }
  const countTotalFeedback = () => {
    const total = Object.values(feedback).reduce(
      (total, value) => value ? total + value : total, 0)

    return total;
  }
  const countPositiveFeedbackPercentage = () =>{
    if(countTotalFeedback()){
      const percentage = Number.parseFloat((feedback.good / countTotalFeedback() * 100).toFixed(1))
    
        return percentage
    }
    return 0;
}

  console.log('peremoga');
      
    return (
      <>
        <Section title='Оставьте ваш отзыв'>
        <FeedbackOptions options={feedback} onLeaveFeedback={addAttribute}/>
        </Section>
        
        <Section title ='Статистика'>
      {countTotalFeedback() ? 
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      : <Notification message="There is no feedback"/>}
       </Section> 
      </>
    );
  }


export default Feedback;
