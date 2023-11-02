
import React, { useEffect, useState } from 'react'
import BasicTabs from '../Questions/BasicTabs'
import { fetchQuizData } from '../Store/api/quizzApi'
import { useDispatch, useSelector } from 'react-redux';

function Quizz() {
 

    const dispatch = useDispatch();
    const category = useSelector((state) => state.quizzSlice.selectedQuiz);

 
  
    useEffect(() => {
      if (category) {
        dispatch(fetchQuizData({category: category.category, easy: category.level}));
      }
    }, [dispatch, category]);
    
  return (
    <div>

<BasicTabs/>
    </div>
  )
}

export default Quizz