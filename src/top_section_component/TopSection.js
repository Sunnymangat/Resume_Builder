import React from 'react'
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import '../component_css/topsection.css';

const TopSection = ({mainInfo,setMainInfo,edit,setedit,selectedImage, setSelectedImage}) => {
  const[error,setError]=React.useState('');
  const changeValues=(event)=>{
    let n= event.target.name;
    let v= event.target.value; 
    setMainInfo({...mainInfo,[n]:v});
  };
  const checker=()=>{
    for (const [key, value] of Object.entries(mainInfo)){
      if(value.length===0){
        setError(key);
        return;
      }
    }
    if(selectedImage===null){setError('selectedImage');return;}
    setError('');
    setedit(true)
  }
  return (
    
    <div className='topSectionProfile'>
      <div className='topSectionProfileImg' style={{
        background:selectedImage===null?'whitesmoke':'transparent',
        border:selectedImage===null?'1px dashed grey':'none'}}>
        {
          edit===false?
          <>
          {selectedImage!==null &&
            <div>
            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <Button sx={{color:'black',background:'transparent',textTransform: 'none',marginLeft:'25px !important',
              '&:hover': { background: 'transparent !important',border:'1px solid black' },border:'1px solid lightgray'}}
              onClick={()=>setSelectedImage(null)}>
              Remove
            </Button>
            </div>
          }
          {selectedImage===null &&
            <label htmlFor="file" 
            style={{cursor:'pointer',border:'1px solid white',background:'white',
            borderRadius:'1px',padding:"2px 10px",fontWeight: "normal"}}>
            <input type="file" id="file" accept='image/*' name="PersonImage"
            onChange={(event) =>{setSelectedImage(event.target.files[0])}}/>
            <UploadIcon sx={{marginRight:'5px',fontSize:'medium'}}/>Upload photo
            </label>
          }
          </>
          :
          <>
          {selectedImage!==null &&
            <div>
            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            </div>
          }
          </>
        }
      </div>

      {
        edit===false?
        <>
        <div className='topSectionProfileInputs'>
        <span>Name</span><br/>
        <input type='text' name='personname' onChange={changeValues} defaultValue={mainInfo.personname}/><br/><br/>
        <span>Email-ID</span><br/>
        <input type='text' name='personid' onChange={changeValues} defaultValue={mainInfo.personid}/><br/><br/>
        
        <div style={{textALign:'center'}}>
        {
          error!=='' && error!=='selectedImage' &&
          <>
            Enter 
            {error==='personname'&& <> Name </>} 
            {error==='personid' && <> Email-ID </>}
            {error==='personbio' && <> Short-Bio </>}
            please <br/><br/>
          </>
        }
        {
          error==='selectedImage' &&
          <div>Please Upload Image<br/><br/></div> 
        }
        </div>
        <Button sx={{color:'white',background:'teal',textTransform: 'none',marginRight:'20px',
          '&:hover': { background: 'teal !important' },border:'1px solid teal'}} onClick={()=>checker()}>
          Save
        </Button>
      </div>
      
      <div className='topSectionProfileBio'>
        <span>Short-Bio</span><br/>
        <textarea name='personbio' onChange={changeValues}  defaultValue={mainInfo.personbio}/>
      </div>
      </>
      :
      <div className='topSectionProfileSave'>
        <h2>{mainInfo.personname}</h2>
        <h3 style={{color:'gray'}}>{mainInfo.personid}</h3>
        <h3 style={{fontWeight:'normal'}}>{mainInfo.personbio}</h3>
        <Button 
          sx={{color:'black',fontWeight:'bold',background:'transparent',textTransform: 'none',marginRight:'20px',
          '&:hover': { background: 'transparent !important',border:'1px solid black !important' },border:'1px solid lightgray'}} 
          onClick={()=>setedit(false)}>
          Edit
        </Button>
      </div>
      }

    </div>
  )
}

export default TopSection;