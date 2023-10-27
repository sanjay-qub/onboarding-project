
import React, { useCallback,useState } from 'react';
import Child from './Child';



function CallbackMain() {
    const [add,setAdd]=useState(0)
    const [count,setCount]=useState(0)
    const Learning = useCallback(()=>{

//lalalala
    },[])
  return (
    <div>  
    <h1>{add}</h1>
 <Child Learning ={Learning} count={count}/>
    <button onClick={()=>setAdd(add + 1)}>Addition</button>

    <h1>{count}</h1>
    <button onClick={()=>setCount(count+2)}>count</button>
    </div>

  )
}

export default CallbackMain