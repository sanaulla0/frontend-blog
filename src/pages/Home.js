import React, { useState,useEffect } from 'react'

import axios from 'axios';
import BlogCard from '../components/Blogcards/index';
import Heading from '../components/Heading'

function Home() {
  const[myblog,setMyblog] = useState();
  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get(
        `http://localhost:8001/blog/homeblogs/${userData.userId}`
      )
      .then((res) => {
        setMyblog(res.data.data);
        console.log("followerblog",myblog);
      })
      .catch((err) => {
        alert(err);
      });
  }, [userData.userId]);


  
  
  return (
    <div> 
      
     
  <Heading />

      {myblog ? myblog.map((item) => <BlogCard props={item} />) : <></>}
    </div>
  )
}

export default Home