import React, { useState } from "react";

const Usetoggle1= (defaultValue)=>{
    const [show,setShow]=useState(defaultValue);
    const toggle=()=>{
        setShow(!show);
    }
    return [show,toggle]
}
export default Usetoggle1;


