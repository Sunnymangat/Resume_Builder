import React from 'react';
import '../component_css/popup.css'

const DifferentPopUps = ({focus,data,setnewData,edit}) => {
  React.useEffect(()=>{
    if(edit===true){
      setnewData({
        id:data.id,inputbox1:data.inputbox1,degree:data.degree,role:data.role,
        startdate:data.startdate,enddate:data.enddate,date:data.date,
        description:data.description
        });
    }
    //eslint-disable-next-line
  },[]);
  const changeValues=(event)=>{
    let n= event.target.name;
    let v= event.target.value; 
    setnewData({...data,[n]:v});
  };
  return (
    edit===true?
    <>
    <span className='popup' style={{color:'black'}}>
      {focus==='education' && 'Institute'}
      {focus==='experience' && 'Company'}
      {focus==='acheievment' && 'Title'}
      <br/>
      <input type='text' name='inputbox1' onChange={changeValues} defaultValue={data.inputbox1}/><br/>
      {
      focus!=='acheievment'?
        <>
          {focus==='education' && 'Degree'}
          {focus==='experience' && 'Role'}
          <br/>
          <input type='text' name={focus==='education'?'degree':'role'} onChange={changeValues} 
          value={focus==='education'?data.degree:data.role}/><br/>
          <span className='popdates'>
            <span className='popdatesone'>
              Start date<br/>
              <input type='text' name='startdate' onChange={changeValues} value={data.startdate}/>
            </span>
            <span className='popdatestwo'>
              End date<br/>
              <input type='text' name='enddate' onChange={changeValues} value={data.enddate}/><br/>
            </span>
          </span>
      </>
      :
      <>
        Date<br/>
        <input type='text' name='date' onChange={changeValues} value={data.date}/>
      </>
      }
      Description<br/>
      <textarea name='description' onChange={changeValues} value={data.description}/>
    </span>
    </>
    :
    <>
    <span className='popup' style={{color:'black'}}>
      {focus==='education' && 'Institute'}
      {focus==='experience' && 'Company'}
      {focus==='acheievment' && 'Title'}
      <br/>
      <input type='text' name='inputbox1' onChange={changeValues}/><br/>
      {
      focus!=='acheievment'?
        <>
          {focus==='education' && 'Degree'}
          {focus==='experience' && 'Role'}
          <br/>
          <input type='text' name={focus==='education'?'degree':'role'} onChange={changeValues}/><br/>
          <span className='popdates'>
            <span className='popdatesone'>
              Start date<br/>
              <input type='text' name='startdate' onChange={changeValues}/>
            </span>
            <span className='popdatestwo'>
              End date<br/>
              <input type='text' name='enddate' onChange={changeValues}/><br/>
            </span>
          </span>
      </>
      :
      <>
        Date<br/>
        <input type='text' name='date' onChange={changeValues}/>
      </>
      }
      Description<br/>
      <textarea name='description' onChange={changeValues}/>
    </span>
    </>
  )
}

export default DifferentPopUps;