

const initialState={
    RowsData :'',
};

const FormReducer=(state=initialState,action)=>{
   
    switch(action.type){
        case "SET_ROW_DATA" : 
        return  {
            ...state,
            RowsData:action.payload
        };
        
        default : return state;
    }
}
export default FormReducer;