import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


const Home = () => {

  const [data,setData] = useState([''])
  // const navigate = useNavigate()

  useEffect(()=>{
    

    let fetchdata=async ()=>{
     
      try{
      
        // if (!token) {
        //   navigate('/signin')
        // }
        
        let finded=await axios.get('http://localhost:5000/findBlog')
        setData(finded.data)
        console.log(finded.data,'newdata');
      } catch(error){
        console.error('Error fetching data:', error);
      }
      }
      fetchdata()
  },[])
  return (
    <div>
      <div>
        <h1 className='text-center'>Blogs</h1>
        <div className='d-grid mt-5 '>
          <div className="row row-cols-1 row-cols-md-4 g-4 p-5  ">
          {data.map((item)=>(
            <div className='col mb-5'>
              <Link className='text-decoration-none ' to={`/viewblog/${item._id}`}><div class="card blogcard text-black text-decoration-none ">
  <div class="card-header text-center ">
  <h5>{item.title}</h5>
  </div>
  <div class="card-body ">
    <p class="card-text">{item.content}</p>
  </div>
</div></Link>
            </div>
          ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
