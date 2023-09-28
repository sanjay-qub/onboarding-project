import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPersonName } from '../actions';

function Equipment() {
  const [name,setName]=useState('');

  const dispatch = useDispatch();

 const savedName = useSelector((state)=>state.Name_Reducer.personName)
 console.log(savedName)

  const nameChange=(event)=>{
    setName(event.target.value);
  }
  const nameSave=()=>{
    dispatch(setPersonName(name))
  }
  return (
    <>
    <label htmlFor="">Name : </label>
   <input className='shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder={savedName} onChange={nameChange} /> 
   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={nameSave}>save</button> <br />
<output className='bg-dark'>{savedName}</output>

    
    </>

  )
}

export default Equipment



