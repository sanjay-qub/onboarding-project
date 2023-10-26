import React, { useState } from 'react';

function useStates() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>
          plus icon
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
          minus icon
        </button>
      </div>
    </>
  );
}

export default useStates;
