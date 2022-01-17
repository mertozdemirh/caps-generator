import React from "react";
import Troll from "../images/troll-face.png"
import "./Header.css"

export default function Header(){
    return(
        <header className="header">
            <img className="header-img" src={Troll} />
            <h2 className="header-title">Caps Generator</h2>
            <h5 className="header-project">With React</h5>
        </header>
    )
}