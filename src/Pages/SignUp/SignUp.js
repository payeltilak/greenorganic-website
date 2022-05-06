import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const SignUp = () => {
    const [agree,setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
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
   const agree=event.target.terms.checked;
   if(agree){
    createUserWithEmailAndPassword(email,password);
   }
   
   
}

    return (
        <div className='w-25 mx-auto'>
            <h2 className='pt-3'>Please SignUp</h2>
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
   <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
   <label className={agree?'text-primary':'text-danger'}  htmlFor="terms">Accept Greenorganic</label>
  
  <Button variant="primary w-50 mx-auto d-block" type="submit">
   SignUp
  </Button>
</Form>
<p className='fw-bold p-3'>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin} >Please Login</Link></p>

<SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;