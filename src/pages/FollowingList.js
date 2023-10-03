import React, { useEffect, useState } from "react";
import UserCards from '../components/UserCards';
import axios from "axios";
import Heading from "../components/Heading";

function FollowingList() {
  const [followingList, setFollowingList] = useState();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(
        `http://localhost:8001/follow/getfollowingList/${userData.userId}`
      )
      .then((res) => {
        let followingListArr = [];
        res.data.data.forEach((user) => {
          const userObj = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            follow: true,
          };

          followingListArr.push(userObj);
        });

        setFollowingList(followingListArr);
      })
      .catch((err) => alert(err));
  }, [userData.userId]);

  return (
    <div>
      <Heading />
      <h1 className="m-5">Following List</h1>
      {followingList ? (
        followingList.map((user) => <UserCards props={user} />)
      ) : (
        <></>
      )}
    </div>
  );
}

export default FollowingList;