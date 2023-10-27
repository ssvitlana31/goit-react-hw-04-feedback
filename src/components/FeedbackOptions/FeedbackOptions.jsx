import React from 'react';
import PropTypes from 'prop-types';
import { Button, WrapperFeedback } from './FeedbackOptions-styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperFeedback>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </WrapperFeedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
