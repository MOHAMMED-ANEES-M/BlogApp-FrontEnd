import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {

    const [data,setData] = useState([''])
    const [refresh,setRefresh] = useState(false)


    let handleDelete= async (id)=>{
        console.log(id);
        let response = await axios.delete(`http://localhost:5000/deleteBlog/${id}`)
        console.log(response);
        setRefresh(!refresh)
    }

  useEffect(()=>{
    
    let fetchdata=async ()=>{
     
      try{        
        let finded=await axios.get('http://localhost:5000/findBlog')
        setData(finded.data)
        console.log(finded.data,'newdata');
        setRefresh(!refresh)
      } catch(error){
        console.error('Error fetching data:', error);
      }
      }
      fetchdata()
    },[refresh])


  return (
    <div>
      <div>
        <h1 className='text-center'>Blogs</h1>
        <div className='d-grid mt-5 '>
          <div className="row row-cols-1 row-cols-md-4 g-4 p-5  ">
          {data.map((item)=>(
            <div className='col mb-5'>
              <div class="card text-black text-decoration-none">
              <Link className='text-decoration-none text-black linkadmin' to={`/viewblog/${item._id}`}>
                <div class="card-header text-center ">
  <h5>{item.title}</h5>
  </div>
 <div class="card-body ">
    <p class="card-text blogcard">{item.content}</p>
  </div></Link>
<div className='w-100 text-center bg-white  pb-3'><button className='btn btn-outline-danger' onClick={()=>handleDelete(item._id)}>Delete</button></div>
</div>

            </div>
          ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default HomeAdmin
