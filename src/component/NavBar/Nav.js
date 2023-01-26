import React from 'react'
import { Navbar,Nav,Collapse,Container } from "react-bootstrap";
import'./Nav.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import Services from '../../component/Home/services/Services'

 const Navs = () => {
  return (
   
      <Navbar  expand="lg" className='naavbaar'>
        <Container>
          <Navbar.Brand className='logo ' href="#home">DORSIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="#home">Home</Link>
              <Link to='#Services' smooth>Services</Link>
              <Link to='#Features' smooth>Features</Link>
              <Link to="#pricing" smooth>Pricing</Link>
              <Link to="#pepole" smooth>Team</Link>
              <Link to="#blog" smooth>Blog</Link>
              <Link to="#contact" smooth>Contact</Link>
            </Nav>
            <button>Try it free</button>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    
    
  )
}
export default Navs;
