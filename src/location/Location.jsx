import React, { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { incNumber,decNumber } from '../actions'
import { setPersonName } from '../actions';

function Location() {
  const [name,setName]=useState('');
  const myState=useSelector((state)=>state.changeTheNumber)
  const savedName = useSelector((state)=>state.Name_Reducer.personName)
  const dispatch = useDispatch();

  const nameChange=(event)=>{
    setName(event.target.value);
  }
  const nameSave=()=>{
    dispatch(setPersonName(name))
  }

  return (
    <>
   
    <div>Location</div>

    <div className="container">
        <h1>Counter App</h1>
        <div className="counter">
            <button onClick={()=>dispatch(incNumber())} id="increment-btn">+</button>
            <div id="counter-value" ><input type="number" value={myState} /></div>
            <button onClick={()=>dispatch(decNumber())}  id="decrement-btn">-</button>
        </div>
        <button id="reset">Reset</button> <br />
        <input className='shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder={savedName} onChange={nameChange} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={nameSave}>save</button> <br />
        <output>{savedName}</output>
    </div>

    </>
    
  )
}

export default Location