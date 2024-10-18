import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Question = ({ index, question, options, onAnswerChange }) => {
  const handleChange = (e) => {
    onAnswerChange(index, e.target.value);
  };

  return (
    <div>
      <Typography variant="h6">{question}</Typography>
      <RadioGroup onChange={handleChange}>
        {options.map((option, i) => (
          <FormControlLabel key={i} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </div>
  );
};

export default Question;
