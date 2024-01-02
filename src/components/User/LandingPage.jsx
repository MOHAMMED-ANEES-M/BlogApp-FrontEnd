import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();
  let token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      // Token exists, navigate to the profile page
      navigate('/profile');
    }
  }, [navigate, token]);
    
  return (
    <div>
    {/* <div className='d-flex flex-wrap  justify-content-between '>
       <div className='ms-5 mt-3'><h1>Memoir.</h1></div>
       <div>
        <div className='mt-3 me-5'>
            <button className='btn btn-outline-dark me-5'>Sign In</button>
            <button className='btn btn-dark '>Sign Up</button>
        </div>
       </div>
    </div> */}
    <div className='w-50 text-center mt-5'>
  <Link to='/signup'><button className='btn btn-dark w-25 h-75 mt-5 '>Sign Up</button></Link> 
  </div>    <div>

    </div>
    </div>

    
  )
}

export default LandingPage
