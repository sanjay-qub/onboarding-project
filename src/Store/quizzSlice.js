import { createSlice } from '@reduxjs/toolkit';
import { fetchQuizData } from './api/quizzApi';

const initialState = {
    selectedQuiz: [],
    seletedAnswer:[],
    quizArray: [],
    status: 'idle', 
    error: null,    
    quizData: null
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateQuizArray: (state, action) => {
        state.quizArray = action.payload;
    },

    setSelectedQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    },

    updateSeletedAnswer: (state, action) => {
        state.seletedAnswer = action.payload;
      },
  },

  extraReducers: {
    [fetchQuizData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchQuizData.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.quizData = action.payload;
    },
    [fetchQuizData.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {updateQuizArray, setSelectedQuiz,updateSeletedAnswer } = quizSlice.actions; 

export default quizSlice.reducer;
