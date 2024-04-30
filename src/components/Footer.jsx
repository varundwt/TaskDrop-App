import '../App.css';
import React from "react"

function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
    return(
        <>
            <h5 className='footer'>Copyright ©️{currentYear} | Varun Pandey</h5>
        </>
    )
}

export default Footer;