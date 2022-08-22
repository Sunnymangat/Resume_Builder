import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DragDrop from './DragDrop';

const ImportPopUp = ({setEducation,setExperience,setAcheievment,setMainInfo}) => {
  const [open, setOpen] = React.useState(false);  
  const [importedData,setimportedData]=React.useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setData=()=>{
    setMainInfo(importedData.mainInfo);
    setEducation(importedData.education);
    setExperience(importedData.workexperience);
    setAcheievment(importedData.acheievment);
    handleClose();
  }
  return (
    <>
    <Button sx={{color:'black',background:'white',textTransform: 'none',fontWeight:'bolder',
        '&:hover': { background: 'white !important' },marginRight:'20px',
        border:'1px solid black'}} onClick={handleClickOpen}>Import</Button>
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',paddingTop:'25px'}}>
          Import
        </DialogTitle>
        
        <DialogContent sx={{minWidth:'450px'}}>
            <DragDrop setEducation={setEducation}
                      setExperience={setExperience} 
                      setAcheievment={setAcheievment}
                      setimportedData={(v)=>setimportedData(v)}/>

        </DialogContent>
        <div style={{padding:'0px 24px',marginTop:'-10px',marginBottom:'30px'}}>
          <Button autoFocus 
              sx={{color:'white',background:'teal',textTransform: 'none',
              '&:hover': { background: 'teal !important' },
              marginRight:'20px',border:'1px solid teal'}} onClick={()=>setData()}>
              Add
          </Button>
          <Button onClick={()=>handleClose()} sx={{color:'black',textTransform: 'none',border:'1px solid black'}}>Cancel</Button>
        </div>
      </Dialog>
      </>
  )
}

export default ImportPopUp;