const initialState = {
    locationPin: '',
    systemPin: '',
    equipmentPin: '',
  };

  const Pin_Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PIN':
        return {
          ...state,
          [action.component]: action.payload,
        };
      default:
        return state;
    }
  };

export default Pin_Reducer