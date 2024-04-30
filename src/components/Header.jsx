import '../App.css';
import React from "react"
import header_image from "../assets/taskup-header.png"

function Header(){
    return(
        <div className='header'>
        <img className="header-img" src={header_image}/>
        </div>
    )
}

export default Header;