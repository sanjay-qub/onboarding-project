import React from 'react'
import useCounter from './useCounter'

function Counter2() {
    const [count,Increment,Decrement]=useCounter()
  return (
    <div> 

    <p>{count}</p>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    
    </div>
  )
}

export default Counter2