import React, { useEffect, useState } from 'react';

import Blogcards from '../components/Blogcards';
import axios from "axios";

function Blogs() {

  const [blogs,SetBlogs] = useState();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    
             axios.get(`http://localhost:8001/blog/getBlogData/${userData.userId}`)
             .then((res)=>{
               SetBlogs(res.data.data)
               console.log("check",res.data.data);
             })
  },[userData.userId]);

  return (
             <div>
             <h1>My Blogs</h1>
                  {
                    blogs ? blogs.map((blog) => <Blogcards props={blog} />) : <></> 
                  }
             </div>
  );
}

export default Blogs;



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }