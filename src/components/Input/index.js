import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './index.css';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

 
function Input() {

   const [name ,setName] = useState();

   const [username ,setUsername] = useState();

   const [email ,setEmail] = useState();

   const [password ,setPassword] = useState();


const handledata = ()=>{

       const formObj = {
            name,
            username,
            email,
            password
       }     
     
       axios.post("http://localhost:8001/register",formObj)
       .then((res) => {
        console.log(res.data.status);
        if (res.data.status === 201) {
          <Link to="/login"></Link>
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  

}

  return (
    <div className='divcenter'>
     
   <Form className='mb-3'>
   <h1  style={{textAlign:"center"}}>Register For Blog</h1>
   <Form.Group  controlId="formGroupEmail"><br/>
     <Form.Label>NAME :</Form.Label> <br/>
     <Form.Control type="name" placeholder="Enter your name" style={{width:300 , height:25}} onChange={(e)=>setName(e.target.value)} />
   </Form.Group>
   <Form.Group  controlId="formGroupEmail"><br/>
     <Form.Label>USER NAME :</Form.Label> <br/>
     <Form.Control type="name" placeholder="Enter user name" style={{width:300 , height:25}} onChange={(e)=>setUsername(e.target.value)} />
   </Form.Group>
   <Form.Group controlId="formGroupEmail"><br/>
     <Form.Label>EMAIL :</Form.Label> <br/>
     <Form.Control type="email" placeholder="Enter email" style={{width:300 , height:25}} onChange={(e)=>setEmail(e.target.value)} />
   </Form.Group>
  
   <Form.Group  controlId="formGroupPassword"><br/>
     <Form.Label>PASSWORD :</Form.Label> <br/>
     <Form.Control type="password" placeholder="Password" style={{width:300 , height:25}} onChange={(e)=>setPassword(e.target.value)}/>
   </Form.Group> <br/>
    <Button text={"Register"} outlined={true} onClick={handledata} />
    <h1 className='login'>or</h1>
    <Link to="/login">
    <Button text={"Login"} outlined={true}  onClick={()=>console.log("btn clicked")} />
    </Link>
    
 </Form>
 </div>
  )
}

export default Input;