import React from "react"
import earth_logo from "../images/earth.png"

export function Header(){
    return(
        <div className="navbar">
            <img src={earth_logo} width="30px"></img>
            <p>my travel journal.</p>
        </div>
    )
}