import React from 'react'



import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Treeview from '../surephase/Treeview';


import Grid from '@mui/material/Grid';
import BasicTabs from '../BasicTabs/BasicTabs';

function EquipmentPage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
       
        color: theme.palette.text.secondary,
      }))

  return (
    <div>

    <Grid container spacing={2}>
              <Grid xs={2}>
                <Item>
                  <Treeview />
                </Item>
              </Grid>
              <Grid xs={10}>
              <Item>  <BasicTabs />  </Item>
          
              </Grid>
            </Grid>


    </div>
  )
}

export default EquipmentPage