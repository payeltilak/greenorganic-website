import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex mx-auto container ' >
                <div style={{height:'1px'}} className='bg-primary w-50 '></div>

       <h5>or</h5>

       <div style={{height:'1px'}} className='bg-primary w-50 '></div>

            </div>
            <button className='btn btn-primary'>Google Sign In</button>
            
        </div>
    );
};

export default SocialLogin;