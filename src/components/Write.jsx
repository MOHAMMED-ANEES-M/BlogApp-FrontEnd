import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Write = () => {

  const navigate = useNavigate()

  let token = localStorage.getItem('token')

  useEffect(()=>{
    if (!token) {
      navigate('/signup')
    }
  })

  return (
    <div>
      <p>Blog Writing Page</p>
    </div>
  )
}

export default Write
