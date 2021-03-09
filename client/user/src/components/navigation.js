import React from "react";

import './navigation.css'



export default function Navigation(){
    return ( <div>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      {/*---- Include the above in your HEAD tag --------*/}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarclass="navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Show Room</a>
          <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/Login">Login
                  <span className="sr-only">(current)</span>
                </a>
              </li>
             
              
            </ul>
            {/*  <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </nav>
    </div>)
}


//<Link to='/Login'><a><div className="w3-bar-item w3-button">Login</div></a></Link>