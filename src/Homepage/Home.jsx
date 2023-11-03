import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  InputAdornment, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedQuiz, updateQuizArray } from '../Store/quizzSlice';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../carousel/Carousel';

function Home() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filteredQuizArray, setFilteredQuizArray] = useState([]);

    const quizArrays = useSelector((state)=>state.quizzSlice.quizArray)


   useEffect(() => {
    dispatch(updateQuizArray(quizArray))
   
    
   }, [])
   

   
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


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
        title:"Code Interview Questions",
        category:"Code",
        level:"Easy"

       },
       {
        title:"Code Interview Questions",
        category:"Code",
        level:"Medium"

       },
       {
        title:"Code Interview Questions",
        category:"Code",
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
      <Carousel/>
 <br />
      <section className=' bg-gray-200  mx-auto justifyContent="center"'>
      <Grid container justifyContent="center" spacing={2}>
  <Grid item xs={12} style={{ textAlign: 'center' }}>
    <TextField 
      className="mx-auto w-96"
      label="quick search"
      value={search}
      onChange={handleSearchChange}
      style={{ margin: '20px 0' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Grid>


  {(search ? filteredQuizArray : quizArrays.length > 0 ? quizArrays : quizArray).map((question, index) => (
  <Grid item xs={5} key={index}>
    <Link to="/Quizz">
      <Card
        className="mx-2 w-34"
        style={{ borderRadius: "30px" }} 
        onClick={() => handleCardClick(question.title, question.category, question.level)}
      >
        <CardContent>
          <Typography variant="h5" component="div" className="text-red-500">
            {question.title}
          </Typography>
          <Typography color="textSecondary" className="mb-2">
            Category: {question.category} Difficulty: {question.level}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </Grid>
))}

</Grid>

</section>

 

  
    
    
  

  
  
  </>

  
   
  )
}

export default Home