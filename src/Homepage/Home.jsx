import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  InputAdornment, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSelectedQuiz, updateQuizArray,setUserDetails} from '../Store/quizzSlice';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../carousel/Carousel';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
});

function Home() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filteredQuizArray, setFilteredQuizArray] = useState([]);

    const quizArrays = useSelector((state)=>state.quizzSlice.quizArray)


   useEffect(() => {
    dispatch(setUserDetails(quizArrays))
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


  const handleSearchChange = (event) => {
    setSearch(event.target.value);


    const filtered = quizArray.filter(
      (item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.level.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredQuizArray(filtered);
  };
 
  const handleStartQuiz = () => {
    
    console.log('Name:', name);
    console.log('Email:', email);
    dispatch(setUserDetails({ name, email}));
  };

  const handleCardClick = (title, category, level) => {
  dispatch(setSelectedQuiz({ title, category, level }));
    };
  


  return (
    <>
    <Carousel />
    <br />
  
    <section className='bg-[#fafbfb] mx-auto flex flex-col items-center p-4'>
      <p>Check out our predefined quizzes! You can use the search bar to filter what you need.</p>
      <br />
  
      <input
        className="mx-auto w-96 px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="QUIZZ search"
        value={search}
        onChange={handleSearchChange}
        style={{ margin: '20px 0' }}
      />
      <br />
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(search ? filteredQuizArray : quizArrays.length > 0 ? quizArrays : quizArray).map((question, index) => (
       
            <div  onClick={() => handleCardClick(question.title, question.category, question.level)}  className="shadow-2xl bg-[#fafbfb] max-h-36 overflow-hidden">
              <div onClick={handleOpen} className="p-4">
                <div className="tracking-wide font-medium font-sans">{question.title}</div>
                <div className="mb-2">
                  Category: {question.category} Difficulty: {question.level}
                </div>
              </div>
            </div>
 
        ))}
      </div>


     
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 w-96">
          <h2 className="text-2xl font-bold mb-4">Submit the Details</h2>

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="block w-full border p-2 mb-4"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="block w-full border p-2 mb-4"
          />

          <Link to="/Quizz" className="block w-full text-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
          </Link>

        </div>
      </div>
    </Modal>
    </section>
  </>
  
  
   
  )
}
export default Home