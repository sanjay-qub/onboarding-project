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
        <div>
            <h1>Result</h1>
            {results.map((result, index) => (
                <div key={index}>
                    <p>
                        {result.isCorrect ?
                            `Question: ${result.question} - Your Answer: ${result.userAnswer} - Correct!` :
                            `Question: ${result.question} - Your Answer: ${result.userAnswer} - Correct Answer: ${result.correctAnswer}`
                        }
                    </p>
                </div>
            ))}
            <p>Score: {score}</p>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Incorrect Answers: {incorrectAnswers}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

export default Result;
