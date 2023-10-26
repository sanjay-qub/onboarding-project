import { useState,React } from "react";


function useCounter(initialvalue=0) {
    const [count, setCount] = useState(initialvalue);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    if (count === 0) {
      return count;
    } else {
      setCount(count - 1);
    }
  }
  return [count,Increment,Decrement]
   
}

export default useCounter