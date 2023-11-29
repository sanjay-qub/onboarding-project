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
import { useNavigate } from 'react-router-dom'; 

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizzdata = useSelector((state) => state.quizzSlice.quizData);
  const category = useSelector((state) => state.quizzSlice.selectedQuiz);
  if(quizzdata){  localStorage.setItem("quizzdata", quizzdata[0].category);}

  console.log("quizdata",quizzdata)
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [value, setValue] = useState(0);
  const isLastQuestion = value === quizzdata.length - 1;
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Check if Redux data is empty and navigate to the home page if true
      if (!quizzdata) {
        navigate('/');
      } else {
        const initialAnswers = quizzdata.map((question) => ({
          id: question.id,
          question: question.question,
          answer: null,
        }));
        setSelectedAnswers(initialAnswers);
      }
    }, 1000); // Adjust the delay time as needed
  
    return () => clearTimeout(timeoutId);
  }, [quizzdata, navigate]);
  


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
      <div className="w-full">
        <Tabs value={value} onChange={handleChange} variant="scrollable" indicatorColor="transparent">
          {quizzdata.map((question, index) => (
            <Tab
              key={index}
              label={`Question ${index + 1}`}
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                margin: '0 8px',
                textAlign: 'center',
                display: 'grid',
                gridTemplateColumns: '4fr 6fr',
                gap: '30px',
                background: value === index ? '#3cd458' : '',
                transition: 'background-color 0.3s',
                color: 'black',
                '&.Mui-selected': {
                  color: 'white',
                },
              }}
            />
          ))}
        </Tabs>

        <CustomTabPanel value={value} index={value}>
          <div className="border-2 border-gray-300 p-4 my-4">
            <div className="text-center mb-4">
              <QuestionMarkIcon />
              {quizzdata[value].question}
            </div>

            <div className="lg:grid grid-cols-1 gap-4  sm:grid-cols-2 ms-12 lg:ms-36  ">
              {Object.keys(quizzdata[value].answers)
                .filter((key) => key.startsWith('answer_'))
                .map((key) => {
                  const answerText = quizzdata[value].answers[key];
                  if (answerText) {
                    return (
                      <Button
                        key={key}
                        className="w-full"
                        variant="text"
                        style={{
                          border: '1px solid black',
                          borderRadius: 'rounded',
                          background: selectedAnswers[value]?.answer === key ? '#3cd458' : '',
                          color: selectedAnswers[value]?.answer === key ? 'white' : 'black',
                          height: '3rem',
                          maxWidth: "80%",
                          fontSize: "10px",
                          marginTop: "5px",
                          '@media (max-width: 667px)': {
                            height: '20rem',
                            marginTop: "40px"
                          },
                        }}
                        onClick={() => handleCheckboxChange(value, key)}
                      >
                        {answerText}
                      </Button>
                    );
                  }
                  return null;
                })}
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <Button
                variant="contained"
                style={{
                  border: '1px solid black',
                  borderRadius: 'rounded',
                  color: 'black',
                  backgroundColor: 'transparent',
                  padding: '10px',
                }}
                onClick={() => setValue((prevValue) => (prevValue - 1 + quizzdata.length) % quizzdata.length)}
              >
                Previous
              </Button>
              {isLastQuestion ? (
                <Link to="/Quizz/Result" className="flex justify-center">
                  <Button
                    className="w-11/12"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    SUBMIT QUIZZ
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  style={{
                    border: '1px solid black',
                    borderRadius: 'rounded',
                    color: 'black',
                    backgroundColor: 'transparent',
                    padding: '10px',
                  }}
                  onClick={() => setValue((prevValue) => (prevValue + 1) % quizzdata.length)}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </CustomTabPanel>
      </div>
    </>
    
  );
}
