import { useState } from "react";

import axios from 'axios';

import "./Register.css";
import { Redirect } from "react-router";

function Register()  {
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [flag, setflag] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
 

  const onSubmit=e=>{
    e.preventDefault()
    const data={
        usernameInput,
        passwordInput,
        firstNameInput,
        lastNameInput,
        emailInput
    }
    console.log(data)
    axios.post('http://localhost:2222/users/',data).then( 
        res=>{
           
            console.log(res)
        }
    ).catch(
        err=>{
            console.log(err)
        }
    )
setflag(true)
 }
 if(flag)
{
    return <Redirect to ='/login'/>
}
  
  return (
    
<div>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

  <div className="wrapper fadeInDown">
    <div id="formContent">
   
      <div className="fadeIn first">
     
      </div>
    
      <form onSubmit={onSubmit} >
      <h3>Register</h3>
      <input type="text" id="username" 
      className="fadeIn second" name="username" 
      placeholder="user name" 
      onChange={(event)=>{setUsernameInput(event.target.value);}}/>
      <input type="text" id="firstname" className="fadeIn second"
       name="First name" placeholder="First name"
       onChange={(event)=>{setFirstNameInput(event.target.value);}} />

      <input type="text" id="lastname" className="fadeIn second" 
      name="Last name" placeholder="Last name"
       onChange={(event)=>{setLastNameInput(event.target.value);}} />
        <input type="text" id="email" className="fadeIn second" 
        name="Email" placeholder="Email"
         onChange={(event)=>{setEmailInput(event.target.value);}} />
        <input type="text" id="password" className="fadeIn third" 
        name="login" placeholder="password"
         onChange={(event)=>{setPasswordInput(event.target.value);}} />
     
          <input type="submit" className="fadeIn fourth" defaultValue="Log In"/>
 
      </form>
     
    </div>
  </div>
</div>

  );
}

export default Register;

