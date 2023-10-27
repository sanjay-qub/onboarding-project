import React from "react";
import Usetoggle1 from "./Usetoggle1";

const ToggleExample = () => {
  const [show, toggle ] = Usetoggle1(true);

  return (
    <div>
      <h4>Toggle custom hook</h4>
      <button onClick={toggle}>Toggle</button>
       
      <p>Current state: {show ? "Visible" : "Hidden"}</p>
    </div>
  );
};

export default ToggleExample;






