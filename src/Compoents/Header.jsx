import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
       <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='text-light fw-bolder'>
          <i class="fa-solid fa-cart-shopping"></i>
            Your's Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
