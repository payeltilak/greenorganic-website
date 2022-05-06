import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
const location=useLocation();
      const from =location.state?.from.pathname || '/';


      if(user){
        navigate(from,{replace:true});
    }

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

      signInWithEmailAndPassword(email,password);
    }
    const navigateSignUp=event=>{
navigate('/signUp')
    }

    return (
        <div>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmit} className='container mx-auto w-50'> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
 
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p className='fw-bold'>Are You new to Greenorganic? <Link to="/signUp" className='text-danger pe-auto text-decoration-none ' onClick={navigateSignUp} >Please signUp</Link></p>

<SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;