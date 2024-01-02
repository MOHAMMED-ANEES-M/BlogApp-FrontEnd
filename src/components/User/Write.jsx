import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Write.css';


const Write = () => {

  const [data,setdata]=useState({ title: '', content: '', author: '' })
  const navigate=useNavigate()

  let handleChange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
  }

  let handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      let response=await axios.post('http://localhost:5000/write',data)
      console.log(response,'res');
      if(response){
        alert('Blog added')
        e.target.reset()
        // navigate('/Home')
      }
    }
    catch(err){
      console.log('Error:',err.response.data.message);
      alert(err.response.data.message)
    }
}

  let token = localStorage.getItem('token')
  const UserId = localStorage.getItem('userId')

  useEffect(()=>{
    if (!token) {
      navigate('/signin')
    }

    const fetchUserId = async () => {
      try {
        let fetchedUserId = UserId
        setdata((prevData) => ({ ...prevData, author: fetchedUserId }));
      } catch (error) {
        console.error('Error fetching user ID:', error.message);
      }
    };

    fetchUserId();

  },[])

  return (
    <div>
       <div className='w-75 m-auto border p-4 '>
      <h1 className='text-center mb-5'>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
      <div className='m-auto w-75 '>
        <label htmlFor="title">Title</label>
        <input className='form-control mb-4' type="text" id='title' name='title' placeholder='Enter the title' onChange={handleChange}/> </div>
        <div className='m-auto w-75'>
        <label htmlFor="content">Content</label>
        <textarea className='form-control mb-4 contentarea' id="content"  name="content" placeholder='Type the content here...' onChange={handleChange} /></div>
        <div className='text-center '><input className='btn btn-outline-dark' type="submit" value="Submit" /></div>
      </form>
    </div>
    </div>
  )
}

export default Write
