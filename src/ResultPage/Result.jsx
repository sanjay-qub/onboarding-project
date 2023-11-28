import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Result() {
  const quizData = useSelector((state) => state.quizzSlice.quizData);
  const selecteData = useSelector((state) => state.quizzSlice.seletedAnswer);
  const User = useSelector((state) => state.quizzSlice.UserDetails);
  const category = localStorage.getItem('quizzdata');
  console.log('Main data', User);
  console.log('seletd data', category);

  const results = selecteData.map((answer) => {
    const question = quizData.find((item) => item.id === answer.id);
    const correctAnswer = question.correct_answer;
    const isCorrect = answer.answer === correctAnswer;

    const selectedText = question.answers[answer.answer];
    const correctText = question.answers[correctAnswer];

    return {
      id: answer.id,
      isCorrect,
      userAnswer: selectedText,
      correctAnswer: correctText,
      question: question.question,
    };
  });

  const totalQuestions = quizData.length;
  const correctAnswers = results.filter((result) => result.isCorrect).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const score = correctAnswers;
  const percentage = (score / totalQuestions) * 100;

  let grade;
  if (percentage >= 80) {
    grade = 'A';
  } else if (percentage >= 70) {
    grade = 'B';
  } else if (percentage >= 40) {
    grade = 'C';
  } else if (percentage >= 20) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  useEffect(() => {
    console.log('Result component rendered');
  
    const saveResultToMongo = async () => {
      const resultData = {
        user: User,
        category: category,
        grade: grade,
        score: score,
      };
      console.log('resultData', resultData);
  
      try {
        const response = await axios.post('http://localhost:8011/saveResult', resultData);
        console.log(response.data);
      } catch (error) {
        console.error('Error saving quiz result:', error.message);
      }
    };
  
    saveResultToMongo();
  
  }, [User,category,grade,score]); 
  

  console.log('Rendering once inside useEffect');
    return (
      <>
      <header className='header text-white bg-[#24292E] h-80 flex justify-center items-center flex-col'>
        <div className="container text-center">
          <h4 className='text-5xl leading-6 font-extralight text-[#fff]'>Results</h4>
          <p className="pt-6"></p>
        </div>
      </header>
    
      <div className="p-5">
      <div className="text-center">
  <p className="text-green-600 font-bold text-3xl mb-4">Grade: {grade}</p>
  <p className="text-green-600 font-bold text-xl mb-4">Score: {score}</p>
  <div className="flex justify-center items-center space-x-4 mb-4">
    <div className="text-center border border-green-600 px-4 py-2 rounded-lg">
      <p className="font-bold">Correct Answers</p>
      <p className="text-lg">{correctAnswers}</p>
    </div>
    <div className="text-center border border-red-600 px-4 py-2 rounded-lg">
      <p className="font-bold">Incorrect Answers</p>
      <p className="text-lg">{incorrectAnswers}</p>
    </div>
  </div>
</div>

        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {results.map((result, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg">
      <p className="mb-2">
        <span className="font-bold">Question:</span> {result.question}
      </p>
      <p className="mb-2">
        <span className="font-bold">Your Answer:</span> {result.userAnswer}
      </p>
      <p>
        <span className="font-bold">Correct Answer:</span> {result.correctAnswer}
      </p>
    </div>
  ))}
</div>

      </div>
    </>
    
    );
}

export default Result;
