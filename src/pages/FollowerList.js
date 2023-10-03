import React, { useEffect, useState } from "react";
import UserCards from '../components/UserCards';
import axios from "axios";
import Heading from "../components/Heading";

function FollowerList() {
  const [followerList, setFollowerList] = useState();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(
        `http://localhost:8001/follow/getfollowerList/${userData.userId}`
      )
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

            setFollowerList(allUserDetails);
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err));
  }, [userData.userId]);

  return (
    <div>
      <Heading />
      <h1 className="m-5">Follower List</h1>
      {followerList ? (
        followerList.map((user) => < UserCards props={user} />)
      ) : (
        <></>
      )}
    </div>
  );
}

export default FollowerList;