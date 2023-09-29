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


 export const SetPincode = (component, pincode) => ({
    type: 'SET_PIN',  
    component,             
    payload:pincode,              
  });