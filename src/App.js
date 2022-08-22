import React from 'react';
import BottomArea from './main_component/BottomArea';
import TopArea from './main_component/TopArea';
import './App.css';

function App() {
  const[education,setEducation]=React.useState([]);
  const[workexperience,setExperience]=React.useState([]);
  const[acheievment,setAcheievment]=React.useState([]);
  
  return (
   <>
   <TopArea education={education} setEducation={(val)=>setEducation(val)} 
            workexperience={workexperience} setExperience={(val)=>setExperience(val)}
            acheievment={acheievment} setAcheievment={(val)=>setAcheievment(val)}/>
   <BottomArea education={education} setEducation={(val)=>setEducation(val)}
              workexperience={workexperience} setExperience={(val)=>setExperience(val)}
              acheievment={acheievment} setAcheievment={(val)=>setAcheievment(val)}
              />
   </>
  );
}

export default App;
