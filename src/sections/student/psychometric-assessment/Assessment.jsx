import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import Question from './Question';

const Assessment = ({ questions, onAnswerChange }) => {
  return (
    <Box>
      {questions.map((q, index) => (
        <Question
          key={index}
          index={index}
          question={q.question}
          options={q.options}
          onAnswerChange={onAnswerChange}
        />
      ))}
    </Box>
  );
};

export default Assessment;
