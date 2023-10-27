import React from 'react';
import PropTypes from 'prop-types';
import { Positive, Title, Total, WrapperStatistics } from './Statistics-styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <Title>Statistics</Title>
      <WrapperStatistics>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </WrapperStatistics>
      <Total>Total: {total}</Total>
      <Positive>Positive Feedback: {positiveFeedback}%</Positive>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
};
