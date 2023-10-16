
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  { useState,useEffect } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function MeasurementForm() {

  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "methodology",headerName:"methodology" },
    { field: "connType" },
    { field: "srcObjType" },
    {field:"srcProduct"},
    {field:"disposition"},
    {field:"srcVolField"},
    {field:"srcFieldType"},
    {field:"targetProduct"},
    {field:"tgtFieldType"},
    {field:"targetFactorField"}
  ]);




  useEffect(() => {
    fetch('https://api.sandbox.surephase.com/allocations/api/v2/connection-templates')
      .then((result) => result.json())
      .then((data) => {
        const connAttribute = data.map((obj) => obj);
    
        const exynos = connAttribute.map((objs) => objs.connAttributeList).flat();
        
     console.log("data",connAttribute)
        console.log("items",exynos)
        setRowData(exynos)
        
      });
  }, []);
 
  

  return (
    <Card >
    <CardActionArea>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
           <div className="ag-theme-alpine" style={{ height: 4000, maxwidth: 49600 }}>
      < AgGridReact 
            rowData={rowData} 
            columnDefs={columnDefs}
            >
         </AgGridReact>
        </div>

        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default MeasurementForm