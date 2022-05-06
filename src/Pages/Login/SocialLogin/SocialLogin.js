import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorElement;

 if (error) {
        errorElement= <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      };

        if(user){
          navigate('/home') 
        }
    return (
        <div>
            <div className='d-flex mx-auto container ' >
                <div style={{height:'1px'}} className='bg-primary w-50 '></div>

       <h5>or</h5>

       <div style={{height:'1px'}} className='bg-primary w-50 '></div>

            </div>
            {errorElement}
            <button onClick={()=>signInWithGoogle()}
             className='btn btn-primary'>
                <img style={{width:'30px'}} src="https://i.ibb.co/kJRjdFp/google-1.jpg" alt="" />
                Google Sign In</button>
            
        </div>
    );
};

export default SocialLogin;