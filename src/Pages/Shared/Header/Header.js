import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }
  return (


    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='fw-bold'>
          <Navbar.Brand as={Link} to="/">Greenorganic</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>


              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            {
              user && <>
                <Nav.Link as={Link} to="/addItem">AddItem</Nav.Link>
                <Nav.Link as={Link} to="/manageInventory">ManageInventory</Nav.Link>
                <Nav.Link as={Link} to="/myItem">MyItem</Nav.Link>
              </>
            }
            <Nav>
              {
                user ?
                  <button className='btn btn-link' onClick={handleSignOut}>SignOut</button>
                  :
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>


  );
};

export default Header;