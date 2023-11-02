import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedQuiz, updateQuizArray } from '../Store/quizzSlice';
import { Link } from 'react-router-dom';


function Home() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filteredQuizArray, setFilteredQuizArray] = useState([]);

    const quizArrays = useSelector((state)=>state.quizzSlice.quizArray)


   useEffect(() => {
    dispatch(updateQuizArray(quizArray))
   
    
   }, [])
   

   


    const quizArray=[
        {
        title:"Linux Interview Questions",
        category:"Linux",
        level:"Easy"
        },
        {
        title:"Linux Interview Questions",
        category:"Linux",
        level:"Medium"
         },
        {
       title:"Linux Interview Questions",
       category:"Linux",
       level:"Hard"
       },
       {
        title:"DevOps Interview Questions",
        category:"DevOps",
        level:"Easy"

       },
       {
        title:"DevOps Interview Questions",
        category:"DevOps",
        level:"Medium"

       },
       {
        title:"DevOps Interview Questions",
        category:"DevOps",
        level:"Hard"

       },
       {
        title:"Docker Interview Questions",
        category:"Docker",
        level:"Easy"

       },
       {
        title:"Docker Interview Questions",
        category:"Docker",
        level:"Medium"

       },
       {
        title:"Docker Interview Questions",
        category:"Docker",
        level:"Hard"

       },
 ]

 const handleCardClick = (title, category, level) => {


  dispatch(setSelectedQuiz({ title, category, level }));
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value);


    const filtered = quizArrays.filter(
      (item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.level.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredQuizArray(filtered);
  };
 




  return (
    <> 
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        style={{ margin: '20px 0' }}
      />
  <Grid container justifyContent="center" spacing={3}>
                {(search ? filteredQuizArray : quizArrays.length > 0 ? quizArrays : quizArray).map((question, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                              <Link to={"/Quizz"}>
                        <Card
                            sx={{ maxWidth: 345, marginBottom: '20px' }}
                            onClick={() =>
                                handleCardClick(question.title, question.category, question.level)
                 
                            }
                        >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {question.title}
                                </Typography>
                                <Typography color="text.secondary">Category: {question.category}</Typography>
                                <Typography color="text.secondary">Level: {question.level}</Typography>
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
        ))}
      </Grid>
  
  </>

  
   
  )
}

export default Home