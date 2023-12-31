import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  let token = localStorage.getItem('token')

  useEffect(()=>{
    if (!token) {
      navigate('/signup')
    }
  })
  return (
    <div>
      <p>Home Page</p>
    </div>
  )
}

export default Home
