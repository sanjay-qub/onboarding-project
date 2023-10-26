import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UseState from './useState/useStates';
import UseStateObject from './useState/UseStateObject';

import Counter1 from './CustomHook/Counter1';
import Counter2 from './CustomHook/Counter2';
import ClearUp from './useEffect/ClearnUp';

function App() {
  return (
    <div className="App">
      <Counter1/>
      <Counter2/>
      <ClearUp/>
    </div>
  );
}

export default App;
