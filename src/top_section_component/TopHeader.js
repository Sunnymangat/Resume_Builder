import React from 'react';
import Button from '@mui/material/Button';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import fileDownload from 'js-file-download'
import ImportPopUp from '../pop_up_components/ImportPopUp';
import '../component_css/topheader.css'

const TopHeader = ({education,workexperience,acheievment,selectedImage,mainInfo,setEducation,setExperience,setAcheievment,setSelectedImage,setMainInfo}) => {
  const [mydata,setmydata]=React.useState({mainInfo,education:[],workexperience:[],acheievment:[]});
  const [exported,setExport]=React.useState(false);
  React.useEffect(()=>{
    if(exported===true){
    const  handleDownload = async(data,url, filename) => {
      await fetch(url, {
        responseType: 'blob',
      }).then(() => {
        fileDownload(data, filename)
      });
    }
    const data=JSON.stringify(mydata);
    handleDownload(data,'https://sunnyresumebuilder.vercel.app/', 'myjson.JSON') ;
    }
    setExport(false);
    //eslint-disable-next-line
  },[mydata]);

  const settingData=()=>{
    setExport(true);
    setmydata({'mainInfo':mainInfo,'education':education,
              'workexperience':workexperience,'acheievment':acheievment})
  }
  
  return (
    <div className='topHeader'>
      <span className='topHeaderLeft'>
      <Button sx={{color:'blue',background:'white',textTransform: 'none',fontWeight:'bolder',
              '&:hover': { background: 'white !important' },marginRight:'20px'}}>
          <ContentPasteIcon sx={{marginRight:'10px'}}/>Resume builder
      </Button>
      </span>
      <span className='topHeaderRight'>
        <ImportPopUp setEducation={setEducation} setExperience={setExperience} setAcheievment={setAcheievment} setSelectedImage={setSelectedImage} setMainInfo={setMainInfo}/>
        <Button sx={{color:'white',background:'#DC143C',textTransform: 'none',fontWeight:'bolder',
        '&:hover': { background: '#DC143C !important' },
        marginRight:'20px',border:'1px solid #DC143C'}}
        onClick={()=>settingData()}
        >
        Export</Button>
      </span>
   </div>
  )
}

export default TopHeader