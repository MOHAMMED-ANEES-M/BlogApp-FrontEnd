import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {

  // const [fetchedData,setfetchedData] = useState([''])
  const [profile,setProfile] = useState([])
  const [username,setUsername] = useState('')
  const navigate = useNavigate()


  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const UserId = localStorage.getItem('userId')
  let token = localStorage.getItem('token')
    useEffect(()=>{

      const fetchedusername = loggedInUsername;
      const fetchedUserId = UserId;

      console.log(fetchedUserId,'UserId');

      let fetchUsername=async ()=>{
     
        try{
        
          if(!token){
            navigate('/signup')
          }
          
          // let finded=await axios.get('http://localhost:5000/find',{
          //   headers: {
          //     Authorization: token
          //   }
          // })
          // setfetchedData(finded.data)
          // console.log(finded.data,'newdata');

          console.log(fetchedusername,'fetchedUser');
          setUsername(fetchedusername)

        } catch(error){
          console.error('Error fetching data:', error);
        }
        }
        fetchUsername()

        let fetchProfile= async ()=>{
          try{
            let findedProfile = await axios.get('http://localhost:5000/findProfile', {
              headers: {
                Authorization: token
              },
              params: {
                id: fetchedUserId,
              },
            })
            console.log('id',);
            setProfile(findedProfile.data)
            console.log(findedProfile.data,'profile');
          }catch(err){
            console.error('Error fetching data:', err)
          }
        }
        fetchProfile()

      },[])
  return (
    <div className='maindiv text-black  '>

      <h1>Welcome: {username}</h1>
    {/* <div>
    
      <h2 className='text-center mb-5 '>List</h2>
        {fetchedData.map((item)=>(
          <div className=' rounded-3 p-3 mt-3 list'>
          <p>State: {item?.email}</p>
          <p>Username: {item?.username}</p>
          <p>Password: {item?.password}</p> 
    </div>
    ))}
    </div> */}

    <div>
      <h2 className='text-center mb-5 text-black '>Profile Details</h2>
      
        <div className='text-black w-25 m-auto border p-3'>
          <div>
          <p>Name: {profile.name}</p>
          <p>Bio: {profile.bio}</p>
          <p>Email: {profile.email}</p>
          <p>State: {profile.state}</p>
          <p>Country: {profile.country}</p>
          </div>
          <div className='text-center '>
        <Link to={`/updateprofile/${profile._id}`}><button className='btn btn-outline-dark'>Update</button></Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
