import React from 'react'
import { useRef,useState } from 'react'

function UseRef1() {
    const refElement=useRef("");
    const [name,setName]=useState("Sanjay")

    function Reset(){
      setName("")
      refElement.current.focus()
    }

    function handleInput(){
refElement.current.style.color="blue"
refElement.current.value="sanj"
    }

    console.log(refElement)
  return (
    <div>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>color</button>
    </div>
  )
}

export default UseRef1