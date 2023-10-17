import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CardContent from '@mui/material/CardContent';

import GeneralFormula from '../validation/GeneralFormula';
import MeasurementForm from '../validation/MeasurementForm';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Fab from '@mui/material/Fab';

import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

function CustomTabPanel(props) {

 
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const [open, setOpen] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modal2close =()=>setOpens(false);
   const modal2Open =()=>setOpens(true);
  const [value, setValue] = React.useState(0);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [iconType, setIconType] = useState('MoreVertRoundedIcon');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setIconType(menuVisible ? 'MoreVertRoundedIcon' : 'CloseRoundedIcon');
  };

  return (
    <>
   


   <Box
  sx={{
    position: 'absolute',
    top: 99,
    right: 0,
    '& > :not(style)': { m: 1 },
  }}
>
  {menuVisible && (
    <>
      <Fab onClick={handleOpen}>
        <DeleteRoundedIcon />
      </Fab>
      <Fab onClick={modal2Open} >
        <AddRoundedIcon  />
      </Fab>
    </>
  )}
  <Fab onClick={toggleMenu}>
    {iconType === 'MoreVertRoundedIcon' ? (
      <MoreVertRoundedIcon />
    ) : (
      <CloseRoundedIcon />
    )}
  </Fab>
</Box>

<div>
      
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  className='rounded-lg'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Equipment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this? You won't be able to recover the data after this action.

          </Typography>
          <button>cancel</button> 
          <button>delete</button>
        </Box>
      </Modal>
    </div>


   <div>
  <Modal 
    open={opens}
    onClose={modal2close}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box className="bg-white rounded-lg p-4 shadow-md">
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <GeneralFormula />
      </Typography>
    </Box>
  </Modal>
</div>
    
   

    <Card  sx={{ marginTop:3,
  marginBottom:2 }}>
  <CardContent className='rounded-lg w-full h-full'>
    <Typography variant="body2" color="text.secondary">
 
    <Box className='w-full h-full'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General Info" {...a11yProps(0)} />
          <Tab label="Measurement" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
 <GeneralFormula/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
   <MeasurementForm/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>


    </Typography>
  </CardContent>
</Card>
    </>

  );
}