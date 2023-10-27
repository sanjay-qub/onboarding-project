import React, { useMemo } from 'react'
import { useState } from 'react'

function UseMemo1() {
    const [add,setAdd]=useState(0);
    const [minus,setMinus]=useState(100)

    // function multiply(){
    //     return add*10;
    // }
    const multiply=useMemo(function multiply(){
        console.log("calling.....")
        return add*10;
       },[add])
  return (
    <div>
        {multiply}
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <span >{add}</span>
        <button  onClick={()=>setMinus(minus-1)}>Substraction</button>
        <span>{minus}</span>
    </div>
  )
}

export default UseMemo1



