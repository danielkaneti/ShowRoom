import React, { useState } from "react";
import "./Register.css";

function Register() {
 
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
      <form>
      <h3>Register</h3>
      <input type="text" id="username" className="fadeIn second" name="user name" placeholder="user name" />
      <input type="text" id="firstname" className="fadeIn second" name="First name" placeholder="First name" />
      <input type="text" id="lastname" className="fadeIn second" name="Last name" placeholder="Last name" />
        <input type="text" id="login" className="fadeIn second" name="Email" placeholder="Email" />
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
     
    </div>
  </div>
</div>

  );
}

export default Register;


