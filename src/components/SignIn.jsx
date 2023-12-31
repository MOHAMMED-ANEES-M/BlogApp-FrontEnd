import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css';

const SignIn = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()



    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    let handleSubmit=async (e)=>{
      e.preventDefault()
      console.log('submit');
      
      try{
        
        if (email !== '' && password !== '') {
          const data = { email, password }; // Combine username and password into an object
          console.log(data, 'data');

          let response=await axios.post('http://localhost:5000/login',data)
          console.log(response,'response');
          console.log('token',response.data.token);


          if(response.data.status){
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('loggedInUsername', response.data.username);
            localStorage.setItem('userId',response.data.id)
            console.log(response.data.id,'userId');
            console.log(response.data.username,'loggedInUsername');
            console.log('success');
            alert('Login Success')
            navigate('/profile')
          }
          else{
            console.log('failed');
            alert('incorrect email or password')
          }

        }
        else if(email === ''){
          alert('email is Required')
        }else{
          alert('Password is required')
        }

        }catch(err){
        console.log(err.response.data.message);
        alert(err.response.data.message)
      }
  }

  return (
    <div className='shadow w-25 m-auto maindiv p-5 rounded border'>
        <div className='text-center mb-5'><h1>Sign In</h1></div>
    <div className=' w-75 m-auto'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input className='form-control mb-4' type="text" name='email' id='email' placeholder='Type your email...' onChange={handleEmailChange}/>
        <label htmlFor="password">Password</label>
        <input className='form-control mb-4' type="text" name='password' autocomplete="off" id='password' placeholder='Type your password...' onChange={handlePasswordChange}/>
        <div className='text-center mt-5'><input className='btn btn-outline-dark signinbtn' type="submit" value='Sign In'/></div>
      </form>
      </div>
      <div className='text-center mt-5 w-100'>
        <p>Don't have an account?<span><Link to='/signup'> Sign Up</Link></span></p>
      </div>
    </div>
  )
}

export default SignIn
