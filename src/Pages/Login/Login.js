import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
      let errorElement;


      if(user){
        navigate(from,{replace:true});
    }
    if (error) {
      errorElement= <div>
          <p className='text-danger'>Error: {error?.message}</p>
        </div>
    };
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

      signInWithEmailAndPassword(email,password);
    }
    const navigateSignUp=event=>{
navigate('/signUp')
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
    const resetPassword=async()=>{
      const email=emailRef.current.value;
      await sendPasswordResetEmail(email)
      alert('sent email')
    }

    return (
        <div className='mx-auto w-25'>
            <h2 className='pt-3'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='container '> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
 
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
 
  <Button variant="primary w-50 mx-auto d-block mb-2 mt-2" type="submit">
   Login
  </Button>
</Form>
{errorElement}
<p className='fw-bold'>Are You new to Greenorganic? <Link to="/signUp" className='text-danger pe-auto text-decoration-none ' onClick={navigateSignUp} >Please signUp</Link></p>

<p className='fw-bold'>Forget Password?<Link to="/signUp" className='text-danger pe-auto text-decoration-none ' onClick={resetPassword} >Reset Password</Link></p>

<SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;