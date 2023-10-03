import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  './styles.css';
import axios from "axios";



function index({props}) {
  const userData = JSON.parse(localStorage.getItem("user"));
  const handleFollowOrUnfollow = (followingUserId, followStatus) => {
    
    if (followStatus === false) {
      const followObj = { followingUserId };
      axios
        .post(
          `http://localhost:8001/follow/followUser/${userData.userId}`,
          followObj
        )
        .then((res) => {
          alert("Successfully followed!");  
        })
        .catch((err) => alert(err));
    } else {
      const followObj = { followingUserId };
      axios
        .post(
          `http://localhost:8001/follow/unfollow/${userData.userId}`,
          followObj
        )
        .then((res) => alert("Successfully unfollowed!"))
        .catch((err) => alert(err));
    }

    window.location.reload();  
  };

  
  return (
   <Card className='crd' style={{ width: "18rem", margin : "2rem", border:`2px solid black`,padding:"0.5rem", textAlign:"center" }  } >
   <Card.Body>
     <Card.Title>{props.name}</Card.Title>
     <Card.Text>{props.username}</Card.Text>  
     <Card.Text>{props.email}</Card.Text>
     <Button
       variant="primary" style={{color : `var(--black)`}}
        onClick={() => handleFollowOrUnfollow(props._id , props.follow )}
     >
    
        {props.follow === true ? "Unfollow" : "Follow"} 
       
     </Button>
   </Card.Body>
 </Card>
);
  
}

export default index;