import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UpdateProfile.css';


const UpdateProfile = () => {

    let {id}=useParams()

    const [data,setdata]=useState('')
    const navigate=useNavigate()

    let handleChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    let handleSubmit=async (e)=>{
        e.preventDefault()

        try{

          let response=await axios.put(`http://localhost:5000/update/${id}`,data)
          console.log(response);
          alert('Details updated')
          navigate('/profile')
        }catch(err){
          console.log(err.response.data.message);
          alert(err.response.data.message);
        }
    }

  return (
    <div>
      <h2 className='text-center mb-5 text-black '>Update Profile</h2>
      
        <div className='text-black w-25 m-auto border p-3'>
          <div>
            <form onSubmit={handleSubmit}>
          <input className='form-control mb-4' type="text" placeholder='username' name='username' onChange={handleChange}/>
          <input className='form-control mb-4' type="text" placeholder='email' name='email' onChange={handleChange}/>
          <input className='form-control mb-4' type="text" placeholder='name' name='name' onChange={handleChange}/>
          <textarea className='form-control mb-4' type="text" placeholder='bio' name='bio' onChange={handleChange}/>
          <input className='form-control mb-4' type="Number" placeholder='number' name='number' onChange={handleChange}/>
          <input className='form-control mb-4' type="text" placeholder='state' name='state' onChange={handleChange}/>
          <input className='form-control mb-4' type="text" placeholder='country' name='country' onChange={handleChange}/>
          <div className='text-center '><input className='btn btn-outline-dark ' type="submit" value="Submit" /></div>
          </form>
          </div>
        </div>
    </div>
  )
}

export default UpdateProfile
