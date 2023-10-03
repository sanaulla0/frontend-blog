import React from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './index.css';
import Blogs from './pages/Blogs';
import CreateBlogs from './pages/CreateBlogs';
import User from './pages/User';
import FollowerList from './pages/FollowerList';
import FollowingList from './pages/FollowingList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={ <Register /> } ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='/createblog' element= {<CreateBlogs />} ></Route>
          {/* <Route path='/editblog' element= {<CreateBlogs pageTitle=
          {"Edit Blog"} btnText ={"Edit Blog"} />} ></Route>
          */}
<Route path='/alluser' element={<User />} ></Route>

   <Route path='/following' element={<FollowingList />}></Route>
   <Route path='/follower' element={<FollowerList />}></Route>
         </Routes>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
