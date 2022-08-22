import React,{useState} from 'react';
import BottomHeader from '../bottom_section_component/BottomHeader'
import BottomSection from '../bottom_section_component/BottomSection'

const BottomArea = ({education,setEducation,workexperience,setExperience,acheievment,setAcheievment}) => {
  const [focus,setFocus]=useState('education');
  const [open,setOpen]=React.useState(-1);
  const [data,setnewData]=React.useState({id:0,inputbox1:"",degree:"",role:"",
                            startdate:"",enddate:"",date:"",description:""});
  return (
    <>
      
      <BottomHeader 
      setFocus={(val)=>setFocus(val)} setOpen={(val)=>setOpen(val)} 
      focus={focus} education={education} workexperience={workexperience} 
      acheievment={acheievment} />

      <BottomSection 
      focus={focus} open={open} setOpen={(val)=>setOpen(val)} 
      education={education} setEducation={setEducation} 
      workexperience={workexperience} setExperience={setExperience} 
      acheievment={acheievment} setAcheievment={setAcheievment}
      data={data} setnewData={(val)=>setnewData(val)}/>
    
    </>
  )
}

export default BottomArea