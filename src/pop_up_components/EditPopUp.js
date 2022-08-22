import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import DifferentPopUps from './DifferentPopUps';
import { useTheme } from '@mui/material/styles';

const EditPopUp = ({focus,val,data,setnewData,education,setEducation,workexperience,setExperience,acheievment,setAcheievment}) => {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(true);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const editData=()=>{
    if(focus==='education'){
      setEducation(education.map((value)=>{
        if(value.id===val.id)return data;
        return value;
      }));
    }
    else if(focus==='experience'){
      setExperience(workexperience.map((value)=>{
        if(value.id===val.id)return data;
        return value;
      }));
    }
    else if(focus==='acheievment'){
      setAcheievment(acheievment.map((value)=>{
        if(value.id===val.id)return data;
        return value;
      }));
    }
    
    handleClose();
  }
  return (
    <>
    <Button 
        sx={{textTransform: 'none',borderColor:'black',border:1,color:'black',
        borderRadius:'5px !important','&:hover': {borderColor:'black',border:1,
        background: 'white !important' }}} onClick={handleClickOpen}>
          Edit
    </Button>

    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    sx={{marginTop:focus!=='acheievment'?fullScreen?'0px':'-80px':fullScreen?'0px':'-130px'}}
  >
    <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',paddingTop:'25px'}}>
      Edit
      {focus==='education' && " education"}
      {focus==='experience' && " work experience"}
      {focus==='acheievment' && " achievement"}
    </DialogTitle>
    
    <DialogContent sx={{minWidth:'450px'}}>
      <DialogContentText>
         <DifferentPopUps focus={focus} data={val} edit={edit} setEdit={()=>setEdit(!edit)} setnewData={setnewData}/>
      </DialogContentText>
    </DialogContent>
    <div style={{padding:'0px 24px',marginTop:'-10px',marginBottom:'30px'}}>
      <Button autoFocus onClick={()=>editData()} 
          sx={{color:'white',background:'teal',textTransform: 'none',
          '&:hover': { background: 'teal !important' },
          marginRight:'20px',border:'1px solid teal'}}>
          Save
      </Button>
      <Button onClick={()=>handleClose()} sx={{color:'black',textTransform: 'none',border:'1px solid black'}}>Cancel</Button>
    </div>
  </Dialog>    
  </>
  )
}

export default EditPopUp;