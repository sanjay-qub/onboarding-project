import React, { useContext,useState,useEffect } from 'react';
import { MyContext } from '../validation/MeasurementForm'; // Make sure the path to MyContext is correct

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function ViewForms() {
    const [methodology, setMethodology] = useState('');
    const [connType, setConnType] = useState('');
    const [srcObjType, setSrcObjType] = useState('');
    const [srcProduct, setSrcProduct] = useState('');
    const [disposition, setDisposition] = useState('');
    const [srcVolField, setSrcVolField] = useState('');
    const [srcFieldType, setSrcFieldType] = useState('');
    const [targetProduct, setTargetProduct] = useState('');
    const [tgtFieldType, setTgtFieldType] = useState('');
    const [targetFactorField, setTargetFactorField] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);

    
    const [rowsData, setRowsData] = useState('');
    console.log("mydata",rowsData)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const shareData = useContext(MyContext);


   

    useEffect(() => {
      
        if (shareData) {
            setRowsData(shareData);
          }
        }, [shareData]);
      console.log("viewform",rowsData);

      const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    return (

        <div>
      <Button onClick={handleOpen}>click</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalContentStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="" className="flex space-x-4">

            <div className="w-1/2">
            <label htmlFor="">Methedology</label>
           <input    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" type="text" value= {rowsData.methodology}  onChange={(e) => setMethodology(e.target.value)} /><br/>
           <label htmlFor="">connType</label>
           <input    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" type="text" value= {rowsData.connType}  onChange={(e) => setConnType(e.target.value)}  /><br />
           <label htmlFor="">srcObjType</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.srcObjType}  onChange={(e) => setSrcObjType(e.target.value)}  /><br />
           <label htmlFor="">srcProduct</label>
           <input type="text"   className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.srcProduct}   onChange={(e) => setSrcProduct(e.target.value)} /><br />
           <label htmlFor="">disposition</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.disposition}  onChange={(e) => setDisposition(e.target.value)}/><br />
           <label htmlFor="">srcVolField</label>
           <input type="text"   className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.srcVolField}  onChange={(e) => setSrcVolField(e.target.value)}  /><br />
           </div>
           <div className="w-1/2">
           <label htmlFor="">srcFieldType</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.srcFieldType}  onChange={(e) => setSrcFieldType(e.target.value)}  /><br />
           <label htmlFor="">targetProduct</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.targetProduct}  onChange={(e) => setTargetProduct(e.target.value)} /><br />
           <label htmlFor="">tgtFieldType</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.tgtFieldType}   onChange={(e) => setTgtFieldType(e.target.value)} /><br />
           <label htmlFor="">targetFactorField</label>
           <input type="text"    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" value= {rowsData.targetFactorField}   onChange={(e) => setTargetFactorField(e.target.value)} /><br />
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Save
   </button>
           </div>

           <br />
      
           </form>
          </Typography>
        </Box>
      </Modal>

    
    </div>
    );
}

export default ViewForms;
