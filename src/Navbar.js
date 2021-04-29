import React from "react";
import searchIcon from "./assets/search.png";
import homeIcon from "./assets/white-home.png";

function Navbar(props) {
    return (
        <div id="navbar">
            <div id="nav-title">Supers Team-Up</div>
            <ul id="nav-list">
                <li><a className="nav-link" href="./" target="_self"><img src={homeIcon} alt="icono-home" height="40px" /></a></li>
                <li><a className="nav-link" href="" target="_self"><img src={searchIcon} alt="icono-buscador" height="30px" /></a></li>
            </ul>
        </div>
    );
}

export default Navbar;