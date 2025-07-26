import React, { useState } from 'react'
import './login.css'
import logo from '../../../assets/assets/logo.png'
import {login,signup} from '../../../firebase'
import netflix_spinner from '../../../assets/assets/netflix_spinner.gif'

const Login = () => {
  const [signState,setSignState]=useState("Sign Up");
  const [name,setName]=useState("");
  const [email,setemail] = useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading] = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true)
    if(signState==="Sign Up"){
      await signup(name,email,password);
    }
    else{
      await login(name,email,password);
    }
    setLoading(false)
  }

  return (
    loading?<div className="login-spinner"> <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?<input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)} />:<></>}
          
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
          <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type='submit' onClick={user_auth}>{signState}</button>
          <div className="form-help">
            <div className="remember"> 
              <input id='checkbox' type="checkbox" />
              <label htmlFor="checkbox">Remeber Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p>:<p>Already have account <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login