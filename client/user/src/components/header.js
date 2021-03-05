import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="w3-content" style={{maxWidth: '1600px'}}>
        <header className="w3-container w3-center w3-padding-48 w3-white">
          <h1 className="w3-xxxlarge"><b>SHOW ROOM</b></h1>
          <h6>Welcome to our store</h6>
        </header>
        <header className="w3-display-container w3-wide" id="home">
          <img className="w3-image" src="images/showroom.png" alt="Fashion Blog" width={1600} height={1060} />
          <div className="w3-display-left w3-padding-large">
            <Link to='/Women'><h6><div className="w3-button w3-black w3-padding-large w3-large w3-hover-opacity-off">SHOP WOMEN</div></h6></Link>
          </div>
          <div className="w3-display-right w3-padding-large">
            <Link to='/Men'><h6><div className="w3-button w3-black w3-padding-large w3-large w3-hover-opacity-off">SHOP MEN</div></h6></Link>
          </div>
        </header>
      </div>
      
      
    )
}