import React from 'react';

import PropTypes from 'prop-types';
import { Button, WrapperFeedback } from './FeedbackOptions-styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperFeedback>
      {options.map((option, index) => {
        return (
          <Button key={index} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        );
      })}
    </WrapperFeedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
