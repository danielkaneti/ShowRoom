import React, { useState } from "react";
import axios from "axios"
import "./Login.css";
import { Redirect } from "react-router";

const Login=()=> {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [flag, setflag] = useState(false);

const onSubmit=e=>{
   e.preventDefault()
   const data={
       emailInput,
       passwordInput
   }
   axios.post('http://localhost:2222/users/login',data).then(
       res=>{
           console.log(res)
       }
   ).catch(
       err=>{
           console.log(err)
       }
   )
   console.log(data)
   setflag(true)
}
if(flag)
{
    return <Redirect to ='/'/>
}
  return (
<div>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="wrapper fadeInDown">
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">
     
      </div>
      {/* Login Form */}
      <form onSubmit={onSubmit}>
      <h3>Login </h3>
        <input type="text" id="login" className="fadeIn second" name="Email" placeholder="Email"  
                onChange={(event)=>{setEmailInput(event.target.value);}} />
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"    
         onChange={(event)=>{setPasswordInput(event.target.value);}} />
        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        <a className="underlineHover" href="/register">Creat an account</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;

