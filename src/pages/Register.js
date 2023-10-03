import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';


function Register() {
  const navigate = useNavigate();
useEffect(()=>{
     if(localStorage.getItem("user")){
          navigate('/home');
     } 
     else{
        navigate('/');
     }
},[])
    
  return (
    <div>
     
     <Cards /> 
   

    </div>
  )
}

export default Register;