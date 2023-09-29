

const initialState={
    personName:'',
};

const Name_Reducer=(state=initialState,action)=>{
   
    switch(action.type){
        case "SET_NAME" : 
        return  {
            ...state,
            personName:action.payload
        };
        
        default : return state;
    }
}
export default Name_Reducer;