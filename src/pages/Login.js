import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from '../components/Common/Button';

import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
const [loginId,setLoginId] = useState();
const[password ,setPassword] = useState();
const navigate = useNavigate();

useEffect(()=>{
       if( localStorage.getItem('user')){
                  navigate('/home');
       }
},[])



const handelSubmit = ()=>{
  console.log("iam entered");
  const userobj = {
           loginId,
           password,
  }
        axios.post("http://localhost:8001/login",userobj)
        
        .then((res)=>{
          console.log(res.data.data);
                  localStorage.setItem("user",JSON.stringify(res.data.data));
                  if(res.data.status === 200){
                         navigate("/home");
                  }
                      
                  
        }).catch((err)=>{
          alert(err.message);
        });

};
const handleRegister = ()=>{
         navigate('/'); 
}

  return (
    
         <div className='divcenter'>
     <Form className='mb-3'>
     <h1  style={{textAlign:"center"}}>Login For Blog</h1>
     <Form.Group  controlId="formGroupEmail"><br/>
       <Form.Label>Login Id :</Form.Label> <br/>
       <Form.Control type="name" placeholder="Enter Your User Name" style={{width:300 , height:25}} onChange={(e)=>setLoginId(e.target.value)} />
     </Form.Group>
     <Form.Group  controlId="formGroupEmail"><br/>
       <Form.Label>Password :</Form.Label> <br/>
       <Form.Control type="password" placeholder="Enter Your Password" style={{width:300 , height:25}} onChange={(e)=>setPassword(e.target.value)} />
     </Form.Group> <br/>
    
    <Button text={"Login"} outlined={true}  onClick={handelSubmit} />

    <h4>If your'e new user</h4>
    
    <Button text={'Register'} outlined={true} onClick={handleRegister}/>
    
    

</Form>
    </div>
  )
}

export default Login;