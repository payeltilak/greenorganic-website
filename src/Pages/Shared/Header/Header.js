import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Header = () => {
  const [user]=useAuthState(auth);
  
  const handleSignOut=()=>{
    signOut(auth)
  }
    return (
   

<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className='fw-bold'>
  <Navbar.Brand href="#home">Greenorganic</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
    
      <Nav.Link href="/details">Details</Nav.Link>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link href="/inventoryItem">InventoryItem</Nav.Link>
      <Nav.Link href="/addItem">AddItem</Nav.Link>
     
    </Nav>
    <Nav>
    {
      user?
      <button onClick={handleSignOut}>SignOut</button>
      :
       <Nav.Link href="login">Login</Nav.Link>
    }

      <Nav.Link eventKey={2} href="SignUp">
     SignUp
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>

     
    );
};

export default Header;