
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Equipment from './equipment/Equipment';
import Location from './location/Location';
import System from './system/System';
import Navbar from './header/Navbar';
import Demo from './tailwind_project/Demo';



function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     
      <Route path='/equipment' element={<Equipment/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/system' element={<System/>}/>
      <Route path='/demo' element={<Demo/>}/>
     </Routes>
    </div>
  );
}

export default App;
