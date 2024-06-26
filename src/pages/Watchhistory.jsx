import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoFromHistroy ,  getVideoFromHistroyApi } from '../services/allApi'
import { Table } from 'react-bootstrap'




function Watchhistory() {

  const[videoHistroy , setVideoHistroy] = useState([])
  const [deleteStatus, setDeleteStatus] = useState([])

  const getHistroy = async()=>{
    const result = await getVideoFromHistroyApi()
    console.log(result);

    if(result.status>=200 && result.status<300){
      setVideoHistroy(result.data)

    }
  }
  console.log(videoHistroy);
  useEffect(()=>{
    getHistroy()
  },[deleteStatus])

  const deleteHistroy = async(id)=>{
    const result = await  deleteVideoFromHistroy(id)
    console.log(result);
    setDeleteStatus(result.data)
  }
 
  return (

    <>
   <div className='d-flex p-3 mt-5 w-100 mb-5'>
    
    <h4 className='ms-md-5'>Watch History</h4>
    <h5 className='me-md-5 ms-auto' ><Link to={'/home'} style={{color:'white',textDecoration:'none'}}><span id='h'><FontAwesomeIcon icon={faArrowLeft} beat style={{color: "#eeeff1",}} className='me-2'/>
     Back to Home</span> <FontAwesomeIcon icon={faHouse} style={{color: "#f1f2f4",}} className='ms-2' /></Link></h5>
    </div>
    <div className='row w-100 mt-5'>
      <div className="col-md-2"></div>
      <div className="col-md-8" > 
        {videoHistroy?.length>0?
         <Table className='table table-bordered table-light' responsive>
         <thead>
          <tr>
           <th>#</th>
           <th>Caption</th>
           <th>URL</th>
           <th>Time Stamp</th>
           <th>Action</th>
          </tr>
         </thead>
         <tbody>
          {videoHistroy?.map((item , index)=> 
          (<tr>
             <td>{index+1}</td>
             <td>{item.caption}</td>
             <td> <Link to={item?.url} target='_blank'>{item?.url}</Link> </td>
             <td>{item?.timestamp}</td>
             <td className='text-center' onClick={()=>deleteHistroy(item.id)}><button className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan}/></button></td>
           </tr>
          ))}
          
         </tbody>
       </Table>
       :
       <p className='text-warning fs-5'>No Watch history</p>
      }

       

       
      </div>
      <div className="col-md-2"></div>
    </div>
      

 

   </>
  )
}

export default Watchhistory