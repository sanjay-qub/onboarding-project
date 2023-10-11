import * as React from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import HandymanIcon from '@mui/icons-material/Handyman';
function Treeview() {

  
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
  <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
 <HandymanIcon/> <TreeItem className='text-left' nodeId="1"  label="9 Hills"  >
        <TreeItem className='text-left' nodeId="2" label="Calendar"/>
      </TreeItem>

      <TreeItem className='text-left' nodeId="3" label="ATS_CALC_SYS" >
        <TreeItem className='text-left' nodeId="4" label="OSS" />

        <TreeItem className='text-left' nodeId="5" label="Hills" >
          <TreeItem className='text-left' nodeId="6" label="index.js"  />
        </TreeItem>

      </TreeItem>

      <TreeItem className='text-left' nodeId="7" label="ATS_SWITCH">
        <TreeItem className='text-left' nodeId="8" label="OSS" />

        <TreeItem className='text-left' nodeId="9" label="MUI">
          <TreeItem className='text-left' nodeId="10" label="index.js" />
        </TreeItem>
        
      </TreeItem>

      <TreeItem className='text-left' nodeId="11" label="Axle Tree CDP">
        <TreeItem className='text-left' nodeId="12" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="13" label="Bulk Upload Load Test">
        <TreeItem className='text-left' nodeId="14" label="OSS" />

        <TreeItem className='text-left' nodeId="15" label="MUI">
          <TreeItem className='text-left' nodeId="16" label="index.js" />
        </TreeItem>
        
      </TreeItem>

      <TreeItem className='text-left' nodeId="17" label="CTGS">
        <TreeItem className='text-left' nodeId="18" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="19" label="DND_ROOT">
        <TreeItem className='text-left' nodeId="20" label="OSS" />

        <TreeItem className='text-left' nodeId="21" label="MUI">
          <TreeItem className='text-left' nodeId="22" label="index.js" />
        </TreeItem>
        
      </TreeItem>

      <TreeItem className='text-left' nodeId="23" label="DND_SUB">
        <TreeItem className='text-left' nodeId="24" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="25" label="EIFS">
        <TreeItem className='text-left' nodeId="26" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="27" label="EWL">
        <TreeItem className='text-left' nodeId="28" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="29" label="Heard Ranch CDP 1">
        <TreeItem className='text-left' nodeId="30" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="31" label="Heard Ranch CDP 2">
        <TreeItem className='text-left' nodeId="32" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="33" label="HENRY">
        <TreeItem className='text-left' nodeId="34" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="35" label="NHIL">
        <TreeItem className='text-left' nodeId="36" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="37" label="patterson">
        <TreeItem className='text-left' nodeId="38" label="patterson E111 - Sub System" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="39" label="patterson GB26 - Sub System">
        <TreeItem className='text-left' nodeId="40" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="41" label="Sabine">
        <TreeItem className='text-left' nodeId="42" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="43" label="Scully CTB">
        <TreeItem className='text-left' nodeId="44" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="45" label="Sea Robin East">
        <TreeItem className='text-left' nodeId="46" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="47" label="SELAT">
        <TreeItem className='text-left' nodeId="48" label="Calendar" />
      </TreeItem>

      <TreeItem className='text-left' nodeId="49" label="Shared System 1">
        <TreeItem className='text-left' nodeId="50" label="Calendar" />
      </TreeItem>

          
      <TreeItem className='text-left' nodeId="51" label="shared System 2">
        <TreeItem className='text-left' nodeId="52" label="Calendar" />
      </TreeItem>

          
      <TreeItem className='text-left' nodeId="53" label="STINGRAY">
        <TreeItem className='text-left' nodeId="54" label="Stingray - EC 0373 A" />
      </TreeItem>

          
      <TreeItem className='text-left' nodeId="55" label="Stingray - WC 0021 G">
        <TreeItem className='text-left' nodeId="56" label="Subsystem" />
      </TreeItem>

          
      <TreeItem className='text-left' nodeId="57" label="SystemKerala">
        <TreeItem className='text-left' nodeId="58" label="Calendar" />
      </TreeItem>


    </TreeView>

    

  </Box>
  )
}

export default Treeview