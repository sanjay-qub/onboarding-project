import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';

import Demo from './tailwind_project/Demo';
import FormValidation from './validation/FormValidation';
import Treeview from './surephase/Treeview';
import Home from './surephase/Home';
import Headers from './surephase/Headers';
import Tabs from './surephase/Tabs';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MeasurementForm from './validation/MeasurementForm';
import GeneralFormula from './validation/GeneralFormula';
import Connection from './validation/Connection';
import EquipmentPage from './Equipment_Page/EquipmentPage';


function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
   
    color: theme.palette.text.secondary,
  }))

  return (
    <div className="App">
      <Headers /> <br/>
      <Routes>
        <Route path="/equipment" element={< EquipmentPage/>} />
        <Route path="/" element={<Navigate to="/equipment" />} />
      
      
     
      </Routes>
    </div>
  );
}

export default App;
