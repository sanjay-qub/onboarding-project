import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import React, { useEffect } from 'react'
import { GET_QUIZZES } from './url';
import { useSelector } from 'react-redux';


export const fetchQuizData = createAsyncThunk('quiz/fetchQuizData',
  async ({ category, easy }) => {
    const url = `${GET_QUIZZES}${category}&difficulty=${easy}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'X-Api-Key': 'FPxcuWls02NBGHwWi16e1v8VDbyLQwBc8iEH1Vvr',
        },
      });

      // Filter and include only the first four non-null answers
      const filteredData = response.data.map(item => {
        const allowedKeys = ['answer_a', 'answer_b', 'answer_c', 'answer_d'];
        const filteredAnswers = Object.keys(item.answers).reduce((acc, key) => {
          if (allowedKeys.includes(key) && item.answers[key] !== null) {
            acc[key] = item.answers[key];
          }
          return acc;
        }, {});
        return { ...item, answers: filteredAnswers };
      });

      // Filter out objects with null 'correct_answer'
      const finalFilteredData = filteredData.filter(item => item.correct_answer !== null);

      return finalFilteredData;
    } catch (error) {
      throw new Error('There was a problem with the fetch operation:', error);
    }
  }
);
