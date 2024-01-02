import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {

  const [profile,setProfile] = useState([])
  const [username,setUsername] = useState('')
  const navigate = useNavigate()

  const UserId = localStorage.getItem('userId')
  let token = localStorage.getItem('token')

    useEffect(()=>{

      const fetchedUserId = UserId;

      console.log(fetchedUserId,'UserId');

        let fetchProfile= async ()=>{
          try{

            if (!token) {
              navigate('/signin')
            }

            let findedProfile = await axios.get('http://localhost:5000/findProfile', {
              headers: {
                Authorization: token
              },
              params: {
                id: fetchedUserId,
              },
            })
            setProfile(findedProfile.data)
            setUsername(findedProfile.data.username)
            console.log(findedProfile.data.username,'username');
            console.log(findedProfile.data,'profile');
          }catch(err){
            console.error('Error fetching data:', err)
          }
        }
        fetchProfile()

      },[UserId,token,navigate])
  return (
    <div className='maindiv text-black  '>

      <h3 className='text-center mb-5'>Welcome: {username}</h3>

    <div>
      <h4 className='text-center mb-5 text-black '>Profile Details</h4>
      
        <div className='text-black w-25 m-auto border p-3'>
          <div>
          <p>Name: {profile.name}</p>
          <p>Bio: {profile.bio}</p>
          <p>Email: {profile.email}</p>
          <p>State: {profile.state}</p>
          <p>Country: {profile.country}</p>
          </div>
          <div className='text-center '>
        <Link to={`/updateprofile/${profile._id}`}><button className='btn btn-outline-dark'>Edit</button></Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
