import React from 'react';
import PopUp from '../pop_up_components/PopUp';
import BottomCard from './BottomCard';
import BottomOpenCard from './BottomOpenCard';

const BottomSection = ({open,setOpen,focus,education,setEducation,workexperience,setExperience,acheievment,setAcheievment,data,setnewData}) => {
  return (
    <>
      <PopUp 
      focus={focus} education={education} setEducation={setEducation} 
      experience={workexperience} setExperience={setExperience} 
      acheievment={acheievment} setAcheievment={setAcheievment} 
      data={data} setnewData={setnewData}/>
      {
        education.length!==0 && focus==='education' &&
        education.map((val)=>{
          return (
            open!==val.id?
            <BottomCard focus={focus} key={val.id} val={val} setOpen={setOpen}/>
            :
            <BottomOpenCard focus={focus}  key={val.id} 
            val={val} setOpen={setOpen} data={data} setnewData={setnewData}
            education={education} setEducation={setEducation}/>
          )
        })
      }
      {
        workexperience.length!==0 && focus==='experience' &&
        workexperience.map((val)=>{
          return (
            open!==val.id?
            <BottomCard focus={focus} key={val.id} val={val} setOpen={setOpen}/>
            :
            <BottomOpenCard focus={focus} key={val.id} 
            val={val} setOpen={setOpen} data={data} setnewData={setnewData} 
            workexperience={workexperience} setExperience={setExperience}/>
          )
        })
      }
      {
        acheievment.length!==0 && focus==='acheievment' &&
        acheievment.map((val)=>{
          return (
            open!==val.id?
            <BottomCard focus={focus} key={val.id} val={val} setOpen={setOpen}/>
            :
            <BottomOpenCard focus={focus} key={val.id} 
            val={val} setOpen={setOpen} data={data} setnewData={setnewData}
            acheievment={acheievment} setAcheievment={setAcheievment}/>
          )
        })
      }
    </>
  )
}

export default BottomSection;