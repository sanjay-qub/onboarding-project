
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  { useState,useEffect,useMemo} from "react";
import { createContext } from 'react';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ViewForms from '../Forms/ViewForms';
import {  useSelector } from 'react-redux';

export const MyContext = createContext("");
function MeasurementForm() {

  const [rowData, setRowData] = useState([]);
 

  const [selectedRows, setSelectedRows] = useState([]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "methodology",headerName:"methodology",filter: 'agSetColumnFilter',checkboxSelection: true },
     { field: "connType" ,filter: 'agSetColumnFilter' },
    { field: "srcObjType",filter: 'agSetColumnFilter'  },
    {field:"srcProduct",filter: 'agSetColumnFilter' },
    {field:"disposition",filter: 'agSetColumnFilter' },
    {field:"srcVolField",filter: 'agSetColumnFilter' },
    {field:"srcFieldType",filter: 'agSetColumnFilter' },
    {field:"targetProduct",filter: 'agSetColumnFilter' },
    {field:"tgtFieldType",filter: 'agSetColumnFilter' },
    {field:"targetFactorField",filter: 'agSetColumnFilter' },
    
  ]);
 
  const Formdata= useSelector((state)=>state.FormReducer)
  console.log("formdata from redux ",Formdata)


 
  // ...
  useEffect(() => {
    fetch('https://api.sandbox.surephase.com/allocations/api/v2/connection-templates')
      .then((result) => result.json())
      .then((data) => {
        const connAttribute = data.map((obj) => obj);
  
        const exynos = connAttribute.map((objs) => objs.connAttributeList).flat(); // Save the original API data
        setRowData(exynos); // Set the displayed data
      });
  }, []);

 
 
 
  
  useEffect(() => {
    if (Formdata.RowsData) {
      const updatedRowData = Formdata.RowsData;
      console.log(" hai broooooo",updatedRowData)
      const updatedOriginalData = rowData.map((originalRow) => {
        if (originalRow._id === updatedRowData.id) {
          return { ...originalRow, ...updatedRowData };
        }
        else{
          console.log("broooooo")
          return originalRow;
        }

       
      });
      setRowData(updatedOriginalData); // Update the displayed data with the updated row
    }
  }, [Formdata]);



  const onSelectionChanged = (event) => {
    if(event){
      console.log("noddddddd",event.api.getSelectedNodes())
      const selectedNodes = event.api.getSelectedNodes()

      if(selectedNodes.length){
        setSelectedRows(selectedNodes[0].data);
        console.log(selectedRows)
      }
    

   
    }
  

   
  };

  return (
    <>
    <Card >
    <MyContext.Provider value={selectedRows}>
  <ViewForms/>
</MyContext.Provider>
    <CardActionArea>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
           <div className="ag-theme-alpine" style={{ height: 4000, maxwidth: 49600 }}>
      < AgGridReact 
            rowData={rowData} 
            columnDefs={columnDefs}
          
            rowSelection={'single'}
            onSelectionChanged={onSelectionChanged}
           
            >
         </AgGridReact>
        </div>

        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>



  </>
  )
}

export default MeasurementForm