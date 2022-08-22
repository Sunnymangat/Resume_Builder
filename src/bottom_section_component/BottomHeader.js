import React from 'react';
import '../component_css/bottomheader.css';

const BottomHeader = ({focus,setFocus,setOpen,education,workexperience,acheievment}) => {
  return (
    <div className='bottomHeader'>
      <div className='bottomHeaderCenter'>
       <button onClick={()=>{setFocus('education');setOpen(-1)}} 
        style={{borderBottom:(focus==='education')?'2px solid black':'none',fontWeight:focus==='education'?'bolder':'normal',
              '&:hover': {borderBottom:(focus==='education')?'2px solid black':'none'}}}>
        Education{' ('+education.length+')'}
        </button>
       
       <button onClick={()=>{setFocus('experience');setOpen(-1)}}
       style={{borderBottom:(focus==='experience')?'2px solid black':'none',fontWeight:focus==='experience'?'bolder':'normal',
              '&:hover': {borderBottom:(focus==='education')?'2px solid black':'none'}}}>
        Work Experience{' ('+workexperience.length+')'}
        </button>

       <button onClick={()=>{setFocus('acheievment');setOpen(-1)}}
       style={{borderBottom:(focus==='acheievment')?'2px solid black':'none',fontWeight:focus==='acheievment'?'bolder':'normal',
              '&:hover': {borderBottom:(focus==='education')?'2px solid black':'none'}}}>
        Achievements{' ('+acheievment.length+')'}
        </button>
      </div>
    </div>
  )
}

export default BottomHeader;