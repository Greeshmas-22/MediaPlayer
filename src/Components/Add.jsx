import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {
 
    //create  state to hold data from input field
    const[video,setvideo] = useState({
      caption:"",
      image:"",
      url:""
 
     })
     const [show, setShow] = useState(false);
     
     const handleClose = () =>{
      setShow(false);
      setvideo({
        caption:"",
     image:"",
     url:""

      })
    } ;
    
     const handleShow = () => setShow(true);


   
   

    const validateLink = (e)=>{
      console.log(e.target.value);
       const link = e.target.value
        //console.log(typeof(link)); */

     if(link.endsWith('?si=4Ly93LeerpIoPCo6')){
      const YTKey = link.slice(-31,-19)
      console.log( YTKey);
      let embedLink = `https://www.youtube.com/embed/${YTKey}`
      setvideo({...video,url:embedLink})
    }
     else if(link.startsWith('https://youtu.be')){
      const YTKey = link.slice(17,28)
      console.log(YTKey);
      let embedLink = `https://www.youtube.com/embed/${YTKey}`
      setvideo({...video,url:embedLink})
    } 
    else{
      const YTKey = link.slice(-11)
      console.log(YTKey);
      let embedLink = `https://www.youtube.com/embed/${YTKey}`
      setvideo({...video,url:embedLink})

    } 

   }

  

   console.log(video);

   const handleupload = async (e) => {
    e.preventDefault();
    const { caption, image, url } = video;

    if (!caption || !image || !url) {
      toast.info("please fill the form completly");
    } else {
      const result = await addVideoApi(video)
      console.log(result);
      if(result.status>=200&&result.status<300){
        toast.success('video uploaded successfully')
        setAddStatus(result.data)
        handleClose()
      }
      else{
        toast.error('something went wrong')
        handleClose()
      }
    }
  }

  
  
    // https://www.youtube.com/embed/oq1EWvgzzwk
   // https://youtu.be/oq1EWvgzzwk?si=4Ly93LeerpIoPCo6
    //https://youtu.be/rhrD7as3KJg?si=V9OJcQmXghHrmv6S// link copied from video share 
    //https://www.youtube.com/embed/rhrD7as3KJg - dev given link(embede code src)

    //<iframe width="791" height="336" src="https://www.youtube.com/embed/rhrD7as3KJg" title="Neeraj Madhav - BALLAATHA JAATHI [Official Video] ft. Dabzee | Baby Jean | ​⁠Rzee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

 

  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload<span id='h'>new Video</span> </h5>
        <button className='btn mb-2' onClick={handleShow}> <FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} className='me-2' /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details.</p>
          <form className='border p-3 border-secondary'>
            <input type='text' placeholder='video caption'  className='form-control' onChange={(e)=>setvideo({...video,caption:e.target.value})}/>
            <input type='text' placeholder='video image'  className='form-control mt-3' onChange={(e)=>setvideo({...video,image:e.target.value})}/>
              <input type='text' placeholder='video url'  className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleupload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </div>

    </>
  )
}

export default Add