import React, { useEffect } from 'react'
import './App.css'
import Home from './components/pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './components/pages/login/login'
import Player from './components/pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log("logged in ");
        navigate("/");
      }
      else{
        console.log("logged out");
        navigate('/login')
      }
    })
  },[])
  return (
    <>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}>  </Route>  
        <Route path='/login' element={<Login/>}>  </Route>
        <Route path='/player/:id' element={<Player/>}/>
        

      </Routes>
        
    </>
  )
}

export default App