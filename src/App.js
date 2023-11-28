
import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from './Homepage/Home';
import Quizz from './Quizzpage/Quizz';
import Result from './ResultPage/Result';
import Headers from './Headers/Headers';
import { BrowserRouter } from 'react-router-dom';
import LeaderBoards from './leaderBoard/LeaderBoards';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/onboarding-project">
     <Headers/>
      <Routes>
   
        <Route path="/" element={<Home/>} />
        <Route path="/Quizz" element={<Quizz/>} />
        <Route path="/Quizz/Result" element={<Result/>} />
        <Route path="/leaderboard" element={<LeaderBoards/>} />
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
