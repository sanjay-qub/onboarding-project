import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Equipment from './equipment/Equipment';
import Location from './location/Location';
import System from './system/System';
import Navbar from './header/Navbar';
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
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/system" element={<System />} />
        <Route path="/demo" element={<Demo />} />
      
        <Route
          path="/"
          element={
            <Grid container spacing={2}>
              <Grid xs={2}>
                <Item>
                  <Treeview />
                </Item>
              </Grid>
              <Grid xs={10}>
              <Item>  <Tabs />  </Item>
              <Item>  <Outlet />     </Item>
              </Grid>
            </Grid>
          }
        >
          <Route path="general_formula" element={<GeneralFormula />} />
          <Route path="Measurement" element={<MeasurementForm/>} />
          <Route path="Connection" element={<Connection/>} />
          <Route path="Formula" element="" />
          <Route path="Allocation" element="" />
          <Route path="History" element="" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
