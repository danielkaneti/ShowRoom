import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div className="w3-bar w3-black w3-hide-small">
        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-facebook-official" /></a>
        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-instagram" /></a>
        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-snapchat" /></a>
        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-flickr" /></a>
        <a href="#" className="w3-bar-item w3-button"><i className="fa fa-twitter" /></a>
        <a href="#" className="w3-bar-item w3-button"><i className="bi bi-cart" /></a>
        

        
      </div>
      
    )
}


//<Link to='/Login'><a><div className="w3-bar-item w3-button">Login</div></a></Link>