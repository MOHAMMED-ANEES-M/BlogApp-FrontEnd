import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css';


const SignUp = () => {

  const [data,setdata] = useState()
  const navigate=useNavigate()

    let handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    let handleSubmit=async (e)=>{
      e.preventDefault()
      try{
        let response=await axios.post('http://localhost:5000/insert',data)
        console.log(response,'res');
        if(response){
          alert('Registration Successfull')
          navigate('/signin')
        }
      }
      catch(err){
        console.log(err.response.data.message);
        alert(err.response.data.message)
      }
  }

  return (
      <div className='shadow w-25 m-auto maindiv p-4 rounded border'>
        <div className='text-center mb-5'><h1>Sign Up</h1></div>
    <div className=' w-75 m-auto'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className='form-control mb-4' type="text" name='username' id='username' placeholder='Type your username...' onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input className='form-control mb-4' type="text" name='email' id='email' placeholder='Type your email...' onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input className='form-control mb-4' type="password" name='password' autoComplete="off" id='password' placeholder='Type your password...' onChange={handleChange}/>
        <label htmlFor="name">Name</label>
        <input className='form-control mb-4' type="text" name='name' id='name' placeholder='Type your name...' onChange={handleChange}/>
        <label htmlFor="bio">Bio</label>
        <input className='form-control mb-4' type="text" name='bio' id='bio' placeholder='Type your bio...' onChange={handleChange}/>
        <label htmlFor="number">Number</label>
        <input className='form-control mb-4' type="text" name='number' id='number' placeholder='Type your number...' onChange={handleChange}/>
        <label htmlFor="state">State</label>
        <input className='form-control mb-4' type="text" name='state' id='state' placeholder='Type your state...' onChange={handleChange}/>
        <label htmlFor="country">Country</label>
        <input className='form-control mb-4' type="text" name='country' id='country' placeholder='Type your country...' onChange={handleChange}/>
        <div className='text-center'><input className='btn btn-outline-dark signupbtn' type="submit" value="Sign Up" /></div>
      </form>
      </div>
      <div className='text-center mt-5 w-100'>
        <p>Already have an account?<span><Link to='/signin'> Sign In</Link></span></p>
      </div>
    </div>
  )
}

export default SignUp
