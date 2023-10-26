import React, { useState } from 'react'


function usestate() {
    [count,setCount]=useState(0);
  return (
<>
  <button onClick={()=>setCount(count+1)}>plus</button>
    <div>{count}</div>
    <button onClick={()=>setCount(count-1)}>minus</button>
  </> 
  )
}

export default usestate