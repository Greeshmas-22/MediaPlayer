import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Landing() {
  return (
    < >
    <div className='row mt-5 w-100  justify-content-center align-items-center'>
    <div className="col-md-1"></div>
    <div className="col-md-5 p-4">
      <h3>  Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis a eius voluptatem neque nobis iste cupiditate non exercitationem magni, vitae velit, veritatis veniam voluptate repellat. Tempore illum et aspernatur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem, enim tempora necessitatibus eveniet fuga deserunt consequuntur molestiae consectetur rerum, similique repellat ratione a pariatur sequi deleniti est distinctio odio.</p>
      <button className='btn btn-warning mt-4'><Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Get Started</Link> </button>
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-5 d-flex justify-content-center align-items-center">
      <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt='no image' className='w-75'></img>
    </div>
  
   </div>

   <div className='row w-100 mt-5'>
   <h3 className='mt-5 text-center mb-5'>Features</h3>
    <div className="col-md-1 me-md-5"></div>
    <div className="col-md-3 px-5 px-md-4 mt-4 ">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://giffiles.alphacoders.com/407/4070.gif" className='w-100'  height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3 px-5 px-md-4 mt-4 ">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media.giphy.com/media/FE0WTM8BG754I/giphy.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3 px-5 px-md-4 mt-4 ">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media0.giphy.com/media/43MWWi2qd4zsdG7nKG/giphy.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example tex to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-1"></div>
   </div>

   <div className='row w-100 mt-5 p-4 ms-1 ms-md-0 p-md-0'>
    <div className='col-md-1'></div>
    <div className='col-md-10 border p-5 rounded m-md-5'>
     <div className="row w-100 ">
       <div className="col-md-6">
        <h3 className='text-warning mt-3'>Simple Fast and Powerful</h3>
        <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi alquid quae ex ipsam, veritatis odio saepe molestiae eum iure eriam ea facere.</p>
        <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi al quae ex ipsam, veritatis odio saepe molestiae eum iure eriam ea facere.</p>
        <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi aliae ex ipsam, veritatis odio saepe molestiae eum iure eriam ea facere.</p>
       </div>
       <div className="col-md-6">
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
     </div>
    </div>


   </div>

    </>
  )
}

export default Landing