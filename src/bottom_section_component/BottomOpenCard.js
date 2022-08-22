import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import EditPopUp from '../pop_up_components/EditPopUp';

function titleCase(str) {
  if(str.length===0)return;
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}


const BottomOpenCard = ({val,setOpen,focus,data,setnewData,education,setEducation,workexperience,setExperience,acheievment,setAcheievment}) => {
  const deleteData=()=>{
    if(focus==='education'){
      //eslint-disable-next-line
      setEducation(education.filter((value)=>{
        if(value.id<val.id && value.id!==val.id)
          return value;
        else if(value.id>val.id && value.id!==val.id){
          value.id=value.id-1;
          return value;
        }  
        }));
        setOpen(-1);
    }
    else if(focus==='experience'){
      //eslint-disable-next-line
      setExperience(workexperience.filter((value)=>{
        if(value.id<val.id && value.id!==val.id)
          return value;
        else if(value.id>val.id && value.id!==val.id){
          value.id=value.id-1;
          return value;
        }
      }));
      setOpen(-1);
    }
    else if(focus==='acheievment'){
      //eslint-disable-next-line
      setAcheievment(acheievment.filter((value)=>{
        if(value.id<val.id && value.id!==val.id)
          return value;
        else if(value.id>val.id && value.id!==val.id){
          value.id=value.id-1;
          return value;
        }
      }));
      setOpen(-1);
    }
  }
  return (
    <div className='bottomSectionListOpen'>
      <Button variant="outlined"  sx={{textTransform: 'none',borderColor:'lightgray',borderBottom:0,color:'black',
        borderRadius:'0px !important','&:hover': {borderColor:'lightgray',borderBottom:0,background: 'white !important' }}} 
        onClick={()=>setOpen(-1)}>
          <ArrowDropDownIcon sx={{textAlign:'left'}}/><p style={{textAlign: "left",width:"49%", display: "inline-block"}}>
        {titleCase(val.inputbox1)}
        </p>
        <p style={{textAlign: "right", width:"50%",display: "inline-block"}}>
        {focus!=='acheievment' && <>{titleCase(val.startdate)}{' - '}{titleCase(val.enddate)}</>} 
        {focus==='acheievment' && <>{titleCase(val.date)}</>} 
        </p>
      </Button><br/>
              
      <div className='bottomSectionListOpenSection'>
        {focus==='education' && <>Degree<div>{val.degree}</div><br/></>}
        {focus==='experience' && <>Role<div>{val.role}</div><br/></>}
        Description<div>{val.description}</div><br/>
        
        <EditPopUp focus={focus} val={val} data={data} setnewData={setnewData}
        education={education} setEducation={setEducation}
        workexperience={workexperience} setExperience={setExperience} 
        acheievment={acheievment} setAcheievment={setAcheievment}
        />

        <Button sx={{textTransform: 'none',borderColor:'black',border:1,color:'black',
        borderRadius:'5px !important','&:hover': {borderColor:'black',border:1,
        background: 'white !important' }}} onClick={()=>deleteData()}>
          Delete
        </Button>

      </div>
    </div>
  )
}

export default BottomOpenCard;