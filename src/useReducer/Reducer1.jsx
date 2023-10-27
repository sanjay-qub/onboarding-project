import { useReducer } from "react";
import reducer from "./ReducerHook";





const Reducer1 = () => {
    const initialValue = 0;
  const [count, dispatch] = useReducer(reducer, initialValue);


  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <>
      <div className="container">
        <button onClick={increment}>inc</button>
        <h1>{count}</h1>
        <button onClick={decrement}>dec</button>
      </div>
    </>
  );
};

export default Reducer1;
