import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from '../components/Common/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateBlogs({pageTitle,btnText}) {
const [ title,setTitle] = useState();
const [textBody,setTextBody] = useState();
const userData = JSON.parse(localStorage.getItem("user"));
console.log("userdata in create",userData);
const navigate = useNavigate();

const handleBlog=()=>{
 
const setblog = {
       title,
       textBody,
};



        axios.post(`http://localhost:8001/blog/createBlog/${userData.userId}`,setblog)
        .then((res)=>{
                     
                     alert("Blog Created Successfully");
                     navigate('/blogs');
        })
        .catch((err)=>alert(err.message));
        
      }
//       else{
// axios.put(`http://localhost:8001/blog/editBlog/${userData.userId}`,setblog)
//        .then(()=>{
//              alert("blog editted successfully");
//              navigate('/blogs');

//        })
//        .catch((err) => {
//         alert(err);
//       });

      
    



  return (

   <div>
   <u>
   <h1 style={{margin:0,display:"flex",justifyContent:"center"}}>Create A Blog</h1>
    </u>

   <Form className='createBlog'>
   
   <Form.Group controlId="exampleForm.ControlInput1">
     <Form.Label>Title:</Form.Label> <br/>
     <Form.Control  type="text" placeholder="enter Title" style={{width:700,height:30}} onChange={(e)=>setTitle(e.target.value)}  />
   </Form.Group><br/>
   <Form.Group  controlId="exampleForm.ControlTextarea1">
     <Form.Label>Text Body:</Form.Label> <br/>
     <Form.Control as="textarea" onChange={(e)=>setTextBody(e.target.value)} rows={10} style={{width:700}} placeholder='DESCRIPTION' />
   </Form.Group>
   <Button text={"create Blog"} outlined={true} onClick={handleBlog}></Button>
 </Form>
 </div>
  )
}

export default CreateBlogs;