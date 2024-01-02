import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ViewBlog.css'

const ViewBlog = () => {

    const [data,setData] = useState('')

    let {id} = useParams()


    useEffect(()=>{ 

        let fetchdata = async ()=>{

            try{

                let fetchedBlog = await axios.get(`http://localhost:5000/findOneBlog/${id}`)
                console.log('fetchedBlog: ',fetchedBlog.data);
                setData(fetchedBlog.data)
            }catch(err){
                console.log('Error:',err.message);
                alert(err.message)
            }
        }
        fetchdata()

    },[])

  return (
    <div>
      <div className='text-center mb-5 pt-5'><h3>{data.title}</h3></div>
      <div className='w-75 m-auto '><p className='viewcontent'>{data.content}</p></div>
    </div>
  )
}

export default ViewBlog
