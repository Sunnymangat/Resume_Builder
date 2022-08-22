import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';

function titleCase(str) {
  if(str.length===0)return;
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

const BottomCard = ({focus,val,setOpen}) => {
  return (
    
    <div className='bottomSectionlist'>
      <Button variant="outlined"  sx={{textTransform: 'none',borderColor:'lightgray',color:'black',
      '&:hover': {borderColor:'lightgray',background: 'white !important' }}} onClick={()=>setOpen(val.id)}>
      <ArrowRightIcon/>     
        <p style={{textAlign: "left",width:"49%", display: "inline-block"}}>
        {titleCase(val.inputbox1)}
        </p>
        <p style={{textAlign: "right", width:"50%",display: "inline-block"}}>
        {focus!=='acheievment' && <>{titleCase(val.startdate)}{' - '}{titleCase(val.enddate)}</>} 
        {focus==='acheievment' && <>{titleCase(val.date)}</>} 
        </p>
      </Button>
    </div>
  )
}

export default BottomCard;