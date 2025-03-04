import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { AllCategoryApi, getVideoApi ,updateCategoryApi  } from '../services/allApi'
import { useState } from 'react'





function View({addStatus, setDragStatus}) {

  const [videoDetails,setVideoDetails] = useState([])
  const [deleteVideoStatus , setDeleteVideoStatus] = useState([])

  const  getVideo = async()=>{
    const result = await  getVideoApi()
    setVideoDetails(result.data);

  }

   const DragOver =(e)=>{
     e.preventDefault()
   }

   const videoDrop = async (e)=>{
   const {videoId, categoryId} = JSON.parse(e.dataTransfer.getData("datashared"))
   console.log(videoId, categoryId);

  //get all category
  const {data} = await AllCategoryApi()
  console.log(data);


  //get selected category
  const selectedCategory = data.find((item)=>item.id==categoryId)
  console.log(selectedCategory);

  //remove video from selected category
  const result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

  const reqbody ={
    categoryName : selectedCategory.categoryName,
    allVideo:result,
    id:selectedCategory.id
  }

   await updateCategoryApi(categoryId,reqbody)
   setDragStatus(true)
 
   }
   
   

   useEffect(()=>{
    getVideo()
   },[addStatus,deleteVideoStatus])
  
  console.log(videoDetails);

  return (
   <Row className=' w-100 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)}  onDrop={(e)=>videoDrop(e)}>

   {videoDetails?.length>0?
   videoDetails.map((item)=>(<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>

   
  
  <Videocard  displayVideo = {item} setDeleteVideoStatus={setDeleteVideoStatus}  />
  
  
   </Col>))
   :
   <p clasname='text-warning fs-4 mt-3'>No video uploaded yet.....</p>}

   



   </Row>
  )
}

export default View