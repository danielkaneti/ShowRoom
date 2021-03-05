import React, { useState } from "react";
import "./Login.css";

function Login() {
 
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
      <h3>Login </h3>
        <input type="text" id="login" className="fadeIn second" name="Email" placeholder="Email" />
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
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


