import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {

    const [data,setData] = useState([''])
    const [refresh,setRefresh] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(['']);
    const [isSearchActive,setisSearchActive] = useState(false)

    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/findBlog?s=${searchTerm}`);
        const filteredResults = response.data.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(filteredResults,'searchdata');
        setResults(filteredResults);
        setisSearchActive(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    let handleDelete= async (id)=>{
        console.log(id);
        let response = await axios.delete(`http://localhost:5000/deleteBlog/${id}`)
        console.log(response);
        setRefresh(!refresh)
        if(isSearchActive){
          const response = await axios.get(`http://localhost:5000/findBlog?s=${searchTerm}`);
          const filteredResults = response.data.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
          console.log(filteredResults,'searchdata');
          setResults(filteredResults);
          setisSearchActive(true);
        }
    }

  useEffect(()=>{
    
    let fetchdata=async ()=>{
     
      try{        
        let finded=await axios.get('http://localhost:5000/findBlog')
        setData(finded.data)
        console.log(finded.data,'newdata');
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
        <div className='w-50 m-auto text-center pt-5'>
        <input className='form-control mb-3' type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch} className='btn btn-outline-dark'>Search</button>
      </div>
        <div className='d-grid mt-5 '>
        { isSearchActive ? (
          <div className="row row-cols-1 row-cols-md-4 g-4 p-5  ">
          {results.map((result)=>(
            <div className='col mb-5'>
              <div class="card text-black text-decoration-none">
              <Link className='text-decoration-none text-black linkadmin' to={`/viewblog/${result._id}`}>
                <div class="card-header text-center ">
  <h5>{result.title}</h5>
  </div>
 <div class="card-body ">
    <p class="card-text blogcard">{result.content}</p>
  </div></Link>
<div className='w-100 text-center bg-white  pb-3'><button className='btn btn-outline-danger' onClick={()=>handleDelete(result._id)}>Delete</button></div>
</div>

            </div>
          ))}
      </div>
        ) : (
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
        )}
      </div>
      </div>
    </div>
  )
}

export default HomeAdmin
