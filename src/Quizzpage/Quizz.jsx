import React, { useEffect } from 'react';
import BasicTabs from '../Questions/BasicTabs';
import { fetchQuizData } from '../Store/api/quizzApi';
import { useDispatch, useSelector } from 'react-redux';

function Quizz() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.quizzSlice.selectedQuiz);
  const quizzdata = useSelector((state) => state.quizzSlice.quizData);
  const status = useSelector((state) => state.quizzSlice.status);
  useEffect(() => {
    if (category && category.category) {
      dispatch(fetchQuizData({ category: category.category, easy: category.level }))
        .unwrap()
        .then((result) => {
          // Data was fetched successfully, do nothing here
        })
        .catch((error) => {
          // Error occurred, you can handle the error or log it
          console.error('Error fetching quiz data:', error);
        });
    }
  }, [dispatch, category]);
  

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="header text-white bg-[#24292E] h-60 flex justify-center items-center flex-col">
        <div className="container text-center">
          <h4 className="text-5xl leading-6 font-extralight text-[#fff]">Start Quizz</h4>
        </div>
      </header>
      <br />
      <BasicTabs />
    </div>
  );
}

export default Quizz;
