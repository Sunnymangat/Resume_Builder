import React from 'react'
import TopHeader from '../top_section_component/TopHeader';
import TopSection from '../top_section_component/TopSection';
const TopArea = ({education,workexperience,acheievment,setEducation,setExperience,setAcheievment}) => {
  const[selectedImage, setSelectedImage] = React.useState(null);
  const[mainInfo,setMainInfo]=React.useState({personname:'',personid:'',personbio:''});
  const[edit,setedit]=React.useState(false);

  return (
    <>
    <TopHeader education={education} workexperience={workexperience} 
    acheievment={acheievment} selectedImage={selectedImage} mainInfo={mainInfo}
    setEducation={setEducation} setExperience={setExperience} setAcheievment={setAcheievment}
    setSelectedImage={(val)=>{setSelectedImage(val)}} setMainInfo={(val)=>setMainInfo(val)}
    />
    <TopSection mainInfo={mainInfo} setMainInfo={(val)=>setMainInfo(val)} 
    edit={edit} setedit={(val)=>setedit(val)}
    selectedImage={selectedImage} setSelectedImage={(val)=>{setSelectedImage(val)}}/>
    </>
  )
}

export default TopArea;