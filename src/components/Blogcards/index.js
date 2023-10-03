import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';
import Button from '../Common/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogCard({props}) {

 const [title, setTitle] = useState();
const [textBody, setTextBody] = useState();
const userData = JSON.parse(localStorage.getItem("user"));
const [edit,setEdit] = useState(false);

const navigate = useNavigate();


const handleSubmit = (blogId) =>{
  
  const blogedit ={
        blogId,
        title,
        textBody
  }

  axios.put(`http://localhost:8001/blog/editblog/${userData.userId}`,blogedit)
   .then(()=>{
    alert("blog edited successfully");
    console.log("iam edited");
           window.location.reload();
   })
   .catch((err)=>{
          alert("can't edit blog");
   })
  
}

const handeleDelete = ()=>{
         axios.delete(`http://localhost:8001/blog/deleteblog/${props._id}`)
        
         .then(()=>{
          console.log(`${props._id}`);
          alert("deleted successfully!")
          window.location.reload();
         })
         .catch((err)=>{
                 alert("can't delete the blog")
         })
        

}

  return (
    <div className='cards'>
   <Card className="m-5">
      <Card.Body>
        <Card.Title><h1>{props.title}</h1></Card.Title>
        <Card.Text><h3>{props.textBody}</h3></Card.Text>
        
        <Button text={"edit"} outlined={true} onClick={()=>setEdit(!edit)}/>
           
           <Button text={"Delete"} outlined={true} onClick={handeleDelete} />

        {edit ? (
          <Form
            className="register_form"
           
          >
            <Form.Group   controlId="title" >
              <Form.Label><h4>Title:</h4></Form.Label>
              <Form.Control
              className='input1'
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group  controlId="textBody">
              <Form.Label><h4>Text Body:</h4></Form.Label>
              <Form.Control
               className='input2'
                as="textarea"
                rows={6}
                placeholder="Enter text body"
                onChange={(e) => setTextBody(e.target.value)}
              />
            </Form.Group>
            <Button text={"submit"}  onClick={()=>handleSubmit(props._id)} />
            </Form>
          ) : <></> } 

        </Card.Body>
        </Card>
    </div>
  )
}

export default BlogCard;







