import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { faPenNib } from '@fortawesome/free-solid-svg-icons/faPenNib';
import { AllCategoryApi, AvideoApi, addCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Col , Row } from 'react-bootstrap';
import { json } from 'react-router-dom';



function Category({ setDragStatus,dragStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName , setCategoryName] = useState("")
  const [allCategory , setAllCategory] = useState([])
  const [addStatus , setAddStatus] = useState(false)

  const handleClose = () => {setShow(false)
   setCategoryName("")
  };
  const handleShow = () => setShow(true);

  const addCategory = async()=>{
   if(categoryName){
    const reqbody = {
      categoryName,
      allVideo:[]
    }
    const result = await addCategoryApi(reqbody)
    console.log(result);

    if(result.status>=200 && result.status<300){
      setAddStatus(true)
      handleClose()
      toast.success('category added succesfully')

    }
    else{
     console.log(result);
    }
   }
   else{
    toast.info('please add category name')
   }
    
  }

  const getAllCategory = async()=>{
    const result = await AllCategoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)
    
     
    }
  }
  console.log(allCategory);

  const deleteCategory = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
  }

  const DragOver = (e)=>{
    e.preventDefault()
  }

  const VideoDrop = async (e, categoryId)=>{
    console.log(`category id is: ${categoryId} `);
    //accesing video id from view component
  const  videoId = e.dataTransfer.getData("videoId")
    console.log("video id is ",videoId);
    //get video from backend
  const {data} =  await AvideoApi(videoId) 
  console.log(data);

  //to add video detils to catergory's all list in backend

  const selectedCategory = allCategory.find((item)=>item.id==categoryId)

  if(selectedCategory.allVideo.find((item)=>item.id==data.id)){
    toast.warning('video already exist in category')
  }
  else{
    selectedCategory.allVideo.push(data)
    await updateCategoryApi(categoryId, selectedCategory)
  }    
  }

  const DragStart =(e, videoId, categoryId)=>{
    console.log(videoId);
    console.log(categoryId);

    // share data to view.js
    let dataShare={
      videoId , categoryId
    }
    e.dataTransfer.setData("datashared", JSON.stringify(dataShare))// datashare is obj convert to string
  }
  
  useEffect(()=>{
    setAddStatus(false)
    getAllCategory()
    setDragStatus(false)
   },[addStatus, dragStatus])

 p

  return (
   <>
   <div className='w-100 mt-5 mt-md-1 p-4'>
    <button onClick={handleShow} className='btn btn-warning w-100'>Add new category <FontAwesomeIcon icon={faPlus} style={{color: "#e7eaee",}}  /> </button>
  
   </div>

 {allCategory?.length>0?
 allCategory?.map((item)=>(
   <div className='mt-md-5 mt-2' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>VideoDrop(e,item.id)}>
  <div className='border border-secondary mt-3 p-3 rounded ms-4 ms-md-0'  >
    <div className='d-flex'>
      <h6>{item.categoryName}</h6>
      <button className='btn btn-danger ms-auto' onClick={()=>deleteCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} style={{color: "#e6e9ef",}} /></button>
    </div>
    <Row>
      {
        item?.allVideo?.length>0?
        item?.allVideo?.map((videoItem)=>( <Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}> {/* allcategory is array map=>item==> item.id */}
           <Videocard displayVideo={videoItem} isPresent={true}/>
        </Col>))
       
        :null
      }
    
    </Row>
 
  </div>
</div>))
  :null}


  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPenNib} style={{color: "#ee6911",}} />Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
            <input type='text' placeholder='Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}>
              </input>        
               </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} /> {/* to give an alert(msg) similr to alert */}

   </>
  )
}

export default Category