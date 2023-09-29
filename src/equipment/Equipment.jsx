import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetPincode, setPersonName } from '../actions';


function Equipment() {
  const [name,setName]=useState('');
  const [pin,setPinLocal]=useState('')

  const dispatch = useDispatch();

 const savedName = useSelector((state)=>state.Name_Reducer.personName)
 const EquipmentPin= useSelector((state)=>state.Pin_Reducer.equipmentPin)

 console.log(savedName)

  const nameChange=(event)=>{
    setName(event.target.value);
  }
  const nameSave=()=>{
    dispatch(setPersonName(name))
  }

  const pinChange=(event)=>{
    setPinLocal(event.target.value);
  }
  const pinSave=()=>{
   dispatch(SetPincode('equipmentPin',pin));
  }
  return (
    <>
    <label htmlFor="">Name : </label>
   <input className='shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder={savedName} onChange={nameChange} /> 
   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={nameSave}>save</button> <br />
<output className='bg-dark'>{savedName}</output> <br />
<label htmlFor="">Pincode : </label>
<input  className='shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"  onChange={pinChange} /> 
   <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={pinSave}>save</button> <br />
   <output>{EquipmentPin}</output>


    
    </>

  )
}

export default Equipment



