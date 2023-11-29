import { createSlice } from '@reduxjs/toolkit';
import { fetchQuizData } from './api/quizzApi';

const initialState = {
    selectedQuiz: [],
    seletedAnswer:[],
    quizArray: [],
    status: 'idle', 
    error: null,    
    quizData: "",
    UserDetails:""
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
    setUserDetails: (state, action) => {
        state.UserDetails = action.payload;
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

export const {updateQuizArray, setSelectedQuiz,updateSeletedAnswer,setUserDetails } = quizSlice.actions; 

export default quizSlice.reducer;
