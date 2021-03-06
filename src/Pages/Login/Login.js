import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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

  if (user) {

    const url = 'https://afternoon-headland-77959.herokuapp.com/login'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: user.user.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
      });



    toast.success('Login successful', { id: 'sajid' })
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
    const navigateSignUp=()=>{
    navigate('/signUp')
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
    const resetPassword=async()=>{
      const email=emailRef.current.value;

     if(email){
      await sendPasswordResetEmail(email)
      toast('sent email')
     }
     else{
       toast('Please Enter your email address')
     }
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

<p className='fw-bold'>Forget Password?<button to="/signUp" className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword} >Reset Password</button></p>

<SocialLogin></SocialLogin>
<ToastContainer/>

        </div>
    );
};

export default Login;