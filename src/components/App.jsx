import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './NotificationMessage/NotificationMessage';
import { Container } from './App-styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ name }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositivFeedbackPersentage = () =>
    countTotalFeedback() > 0
      ? ((good / countTotalFeedback()) * 100).toFixed(2)
      : 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positiveFeedback={countPositivFeedbackPersentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
