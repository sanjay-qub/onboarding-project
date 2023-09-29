export const incNumber=()=>{
    return{
        type:"INCREMENT"
    }
  
}

 export const decNumber=()=>{
    return{
        type:"DECREMENT"
    }


  
 }

 export const setPersonName=(name)=>{
    return {
    type:"SET_NAME",
    payload:name,
    };
 }