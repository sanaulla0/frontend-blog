import React from 'react';
import axios from 'axios';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Header() {

 const navigate = useNavigate();
const data = JSON.parse(localStorage.getItem('user'));
console.log(data.name);
 
 const handlelogOut = ()=>{
            
  localStorage.removeItem('user');
 
  axios.post("http://localhost:8001/logout")
  .then((res)=>{
    console.log(res.data)
  }).catch((err)=>alert(err.message));
 
  navigate('/');

}

  return (
    <>
    <h1>WELCOME!  {data.username}</h1>
   
    <div className='btn'>
      
 <Button text={"logout"}  outlined={true} onClick={handlelogOut} />
 <Link to='/createblog'>
      <Button text={"Create Blog"}  outlined={true} onClick={()=>console.log("create blog")} />
      </Link>
      <Link to={"/blogs"} >
      <Button text={"myBlogs"} outlined={true} onClick={()=>console.log("my blogs")}/>
      </Link>

<Link to={"/alluser"}>
 <Button text={"All Users"} outlined={"true"} onClick={()=>console.log("all users")} />
</Link>

    </div>
    </>
  )
}

export default Header;