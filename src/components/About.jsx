import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  let token = localStorage.getItem('token')

  useEffect(()=>{
    if (!token) {
      navigate('/signup')
    }
  })

  return (
    <div>
      <p>About</p>
    </div>
  )
}

export default About
