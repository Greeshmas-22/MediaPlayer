import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Top() {
  return (
    <Navbar className="bg-transparent border">
        <Container>
          <Navbar.Brand className='text-warning'>
          <FontAwesomeIcon icon={faVideo} beat size='2xl' />
           <span className='text-warning ms-3 '>  Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Top