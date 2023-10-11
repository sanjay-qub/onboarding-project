import React from 'react'
import Treeview from './Treeview'
import FormValidation from '../validation/FormValidation'



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Headers from './Headers';
function Home() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  return (
    <div>
<Headers/>

 <br />


<Grid container spacing={2}>

<Grid xs={2}>
  
  <Item><Treeview/></Item>
  </Grid>


  <Grid xs={10}>
  <Item><FormValidation/></Item>
  </Grid>


</Grid>







    </div>
  )
}

export default Home