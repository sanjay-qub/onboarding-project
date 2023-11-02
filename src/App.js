
import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from './Homepage/Home';
import Quizz from './Quizzpage/Quizz';
import Result from './ResultPage/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quizz" element={<Quizz/>} />
        <Route path="/Quizz/Result" element={<Result/>} />
     
      </Routes>
    </div>
  );
}

export default App;
