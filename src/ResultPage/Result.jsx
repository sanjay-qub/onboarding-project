import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
    const quizData = useSelector((state)=>state.quizzSlice.quizData)
    const selecteData=useSelector((state)=>state.quizzSlice.seletedAnswer)

    console.log("Main data",quizData)
    console.log("seletd data",selecteData)


    if (!quizData || !selecteData) {
        return <div>Loading...</div>;
    }

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
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return (
        <div className="p-5">
        <h1 className="text-2xl text-center font-bold mb-4">Result</h1>
        <p className="text-green-600 text-center  font-bold text-2xl mb-4">Grade: {grade}</p>
        <p className="text-green-600 text-center  font-bold text-lg mb-4">Score: {score}</p>
        <p className='text-center '>Correct Answers: {correctAnswers}</p>
        <p className='text-center '>Incorrect Answers: {incorrectAnswers}</p>
<br />

<div className="flex flex-wrap mb-8">
  {results.map((result, index) => (
    <div key={index} className="w-1/2 mb-4 p-4 rounded-full bg-blue-200">
      <p className="mb-2 pl-6">
        Question: {result.question}
      </p>
      <p className="mb-2  pl-6">
        Your Answer: {result.userAnswer}
      </p>
      <p className='pl-6'> 
        Correct Answer: {result.correctAnswer}
      </p>
    </div>
  ))}
</div>


      </div>
      
      
    );
}

export default Result;
