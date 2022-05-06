import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
const navigate=useNavigate();
const navigateLogin=()=>{
    navigate('/login')
}
if(user){
    navigate('/home');
}

const handleSignUp=event=>{
    event.preventDefault();
   const name=event.target.name.value;
   const email=event.target.email.value;
   const password=event.target.password.value;
   
   createUserWithEmailAndPassword(email,password);
}

    return (
        <div className='w-50 mx-auto'>
            <h2>Please SignUp</h2>
            <Form onSubmit={handleSignUp}>

            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label className='fw-bold'>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter Name" required />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fw-bold' >Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='fw-bold'>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p className='fw-bold'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin} >Please Login</Link></p>
        </div>
    );
};

export default SignUp;