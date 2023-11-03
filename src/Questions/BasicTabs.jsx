import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { updateSeletedAnswer } from '../Store/quizzSlice';
import { Link } from 'react-router-dom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const dispatch = useDispatch();
  const quizzdata = useSelector((state) => state.quizzSlice.quizData);
  console.log("quizdata",quizzdata)
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (quizzdata) {
      const initialAnswers = quizzdata.map((question) => ({
        id: question.id,
        question: question.question,
        answer: null,
      }));
      setSelectedAnswers(initialAnswers);
    }
  }, [quizzdata]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheckboxChange = (questionIndex, answer) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = {
        id: quizzdata[questionIndex].id,
        question: quizzdata[questionIndex].question,
        answer: answer,
      };
      return updatedAnswers;
    });
  };

  const handleSubmit = () => {
    dispatch(updateSeletedAnswer(selectedAnswers));
  };

  if (!quizzdata) {
    return <div>Loading...</div>;
  }
    return (
    <>
    <Box sx={{ width: '100%' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons="auto">
  {quizzdata.map((question, index) => (
    <Tab
      key={index}
      label={`Question ${index + 1}`}
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '8px',
        margin: '0 8px',
        textAlign: 'center',
        display: 'inline-block',
        minWidth: '120px', 
      }}
    />
  ))}
</Tabs>


  
  <CustomTabPanel value={value} index={value}>
    <Box sx={{ border: '1px solid #ccc', padding: '16px', margin: '16px 0' }}>
  <Typography>  <QuestionMarkIcon/>  {quizzdata[value].question}</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2px' }}>
        {Object.keys(quizzdata[value].answers)
          .filter((key) => key.startsWith('answer_'))
          .map((key) => {
            const answerText = quizzdata[value].answers[key];
            if (answerText) {
              return (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={selectedAnswers[value]?.answer === key}
                      onChange={() => handleCheckboxChange(value, key)}
                    />
                  }
                  label={answerText}
                />
              );
            }
            return null;
          })}
      </Box>
    </Box>
  </CustomTabPanel>
</Box>
      <Link to={'/Quizz/Result'} className='flex justify-center'>
        <Button className='' variant="contained" color="success"  onClick={handleSubmit} >Completed</Button>
      </Link>
    </>
  );
}
