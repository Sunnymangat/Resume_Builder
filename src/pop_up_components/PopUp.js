import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DifferentPopUps from './DifferentPopUps';
import '../component_css/bottomsection.css';

const PopUp = ({focus,education,setEducation,experience,setExperience,acheievment,setAcheievment,data,setnewData}) => {
  const[error,setError]=React.useState('');
  const [open, setOpen] = React.useState(false);  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const saveData= () =>{
    if(focus==='education'){
      setnewData({...data,id:education.length+1});
      setEducation([...education,data]);
    }
    if(focus==='experience'){
      setnewData({...data,id:experience.length+1});
      setExperience([...experience,data]);
    }
    if(focus==='acheievment'){
      setnewData({...data,id:acheievment.length+1});
      setAcheievment([...acheievment,data]);
    }
    setnewData({inputbox1:"",degree:"",role:"",
                      startdate:"",enddate:"",date:"",description:""});
    handleClose();
  };


  const checker=()=>{
    if(focus==='education'){
      //id:0,inputbox1:"",degree:"",role:"",
      //                      startdate:"",enddate:"",date:"",description:""
      for (const [key, value] of Object.entries(data)){
        if(value.length===0 && key!=="role" && key!=="date" && key!=='id'){
          setError(key);
          return;
        }
      }
    }else if(focus==='experience'){
      for (const [key, value] of Object.entries(data)){
        if(value.length===0 && key!=="degree" && key!=="date" && key!=='id'){
          setError(key);
          return;
        }
      }
    }else if(focus==='acheievment'){
      for (const [key, value] of Object.entries(data)){
        if(value.length===0 && key!=="degree" 
          && key!=="role" && key!=='id' && key!=="startdate" 
          && key!=="enddate"){
          setError(key);
          return;
        }
      }
    }
    setError('');
    saveData();
  }

  return (
    <div className='bottomSection'>
      <Button variant="outlined" 
        sx={{textTransform: 'none',borderColor:'black',color:'black',
            '&:hover': {borderColor:'black',background: 'white !important' }}} 
        onClick={handleClickOpen}>
        Add New
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{marginTop:focus!=='acheievment'?fullScreen?'0px':'-80px':fullScreen?'0px':'-130px'}}
      >
        <DialogTitle id="responsive-dialog-title" sx={{fontWeight:'bold',paddingTop:'25px'}}>
          Add new
          {focus==='education' && " education"}
          {focus==='experience' && " work experience"}
          {focus==='acheievment' && " achievement"}
        </DialogTitle>
        
        <DialogContent sx={{minWidth:'450px'}}>
          <DialogContentText>
             <DifferentPopUps focus={focus} data={data} setnewData={(val)=>setnewData(val)}/>
          </DialogContentText>
          {
            error!=='' && focus==='education' &&
            <div style={{textAlign:'center',fontWeight:'bold'}}>
              {error==='inputbox1' && <>Please Enter Institute Name</>}
              {error==='degree' && <>Please Enter Degree Name</>}
              {error==='startdate' && <>Please Enter Start Date</>}
              {error==='enddate' && <>Please Enter End Date</>}
              {error==='description' && <>Please Enter Description</>}

            </div>
          }
          {
            error!=='' && focus==='experience' &&
            <div style={{textAlign:'center',fontWeight:'bold'}}>
              {error==='inputbox1' && <>Please Enter Company Name</>}
              {error==='role' && <>Please Enter Role</>}
              {error==='startdate' && <>Please Enter Start Date</>}
              {error==='enddate' && <>Please Enter End Date</>}
              {error==='description' && <>Please Enter Description</>}
            </div>
          }
          {
            error!=='' && focus==='acheievment' &&
            <div style={{textAlign:'center',fontWeight:'bold'}}>
              {error==='inputbox1' && <>Please Enter Appropriate Title</>}
              {error==='date' && <>Please Enter Date</>}
              {error==='description' && <>Please Enter Description</>}
            </div>
          }
        </DialogContent>
        <div style={{padding:'0px 24px',marginTop:'-10px',marginBottom:'30px'}}>
          <Button autoFocus onClick={()=>{checker()}} 
              sx={{color:'white',background:'teal',textTransform: 'none',
              '&:hover': { background: 'teal !important' },
              marginRight:'20px',border:'1px solid teal'}}>
              Save
          </Button>
          <Button onClick={()=>handleClose()} sx={{color:'black',textTransform: 'none',border:'1px solid black'}}>Cancel</Button>
        </div>
      </Dialog>
    </div>
  );
}

export default PopUp;