import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';


const Home = () => {

  const [data,setData] = useState([''])
  // const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(['']);
  const [isSearchActive,setisSearchActive] = useState(false)

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/findBlog?s=${searchTerm}`);
      // const data = await response.json();
      const filteredResults = response.data.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));
      console.log(filteredResults,'searchdata');
      setResults(filteredResults); // Ensure results is an array
      setisSearchActive(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

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
        <div className='w-50 m-auto text-center pt-5'>
        <input className='form-control mb-3' type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch} className='btn btn-outline-dark'>Search</button>
      </div>
        <div className='d-grid mt-5 '>
          { isSearchActive ? (
            <div className="row row-cols-1 row-cols-md-4 g-4 p-5  ">
            {results.map((result)=>(
              <div className='col mb-5'>
                <Link className='text-decoration-none ' to={`/viewblog/${result._id}`}><div class="card blogcard text-black text-decoration-none ">
    <div class="card-header text-center ">
    <h5>{result.title}</h5>
    </div>
    <div class="card-body ">
      <p class="card-text">{result.content}</p>
    </div>
  </div></Link>
              </div>
            ))}
        </div>
          ) : (
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
          )}
      </div>
      </div>
    </div>
  )
}

export default Home
