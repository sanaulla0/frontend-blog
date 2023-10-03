import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCards from '../components/UserCards';
import Button from 'react-bootstrap/esm/Button';
import Heading from '../components/Heading';

function User() {
 const [users,setUsers] = useState();
 const userData = JSON.parse(localStorage.getItem("user"));
useEffect(()=>{
        
 axios.get(`http://localhost:8001/getallusers/${userData.userId}`)
 .then((res1) => {
  axios
    .get(
      `http://localhost:8001/follow/getfollowingList/${userData.userId}`
    )
    .then((res2) => {
      let followingMap = new Map();

      res2.data.data.forEach((user) => {
        followingMap.set(user.username, true);
      });

      let allUserDetails = [];

      res1.data.data.forEach((user) => {
        if (followingMap.get(user.username)) {
          let userObj = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            follow: true,
          };
          allUserDetails.push(userObj); 
        } else {
          let userObj = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            follow: false,
          };
          allUserDetails.push(userObj);
        }
      });

      setUsers(allUserDetails);
      console.log("iam geeting users",users);
      
    })
    .catch((err) => alert(err));
})
.catch((err) => alert(err));
},[userData.userId])

  return (
    <>
    <Heading />
    <h1 className="m-5">Users</h1>
    <div className="follow_list">
    {" "}
    
    <div className="follow_btns">
      {" "}
      <Button style={{color:`var(--black)`}}
        className="m-2"
        onClick={() => (window.location.href = "/following")}
      >
        Following List
      </Button>
      <br/>
      <Button style={{color:`var(--black)`}}
        className="m-2"
        onClick={() => (window.location.href = "/follower")}  
      >
        Follower List
      </Button>
    </div>
  



    </div>
    <div>
          
 {users ? users.map((user) => <UserCards props={user} /> )  : <></>}

    </div>
    
    </>
  )
}

export default User;