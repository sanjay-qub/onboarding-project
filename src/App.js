import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UseState from './useState/useStates';
import UseStateObject from './useState/UseStateObject';

import Counter1 from './CustomHook/Counter1';
import Counter2 from './CustomHook/Counter2';
import ClearUp from './useEffect/ClearnUp';
import UseMemo1 from './useMemo/UseMemo1';
import CallbackMain from './useCallback/CallbackMain';
import UseRef1 from './useRef/UseRef1';
import ToggleExample from './customHook2/ToggleExample';
import Reducer1 from './useReducer/Reducer1';







function App() {
  return (
    <div className="App">
      <Counter1/>
      <Counter2/>
      <ClearUp/>
     <UseMemo1/>
     <CallbackMain/>
     <UseRef1/>
     <ToggleExample/>
     <Reducer1/>
  
     
    </div>
  );
}

export default App;
