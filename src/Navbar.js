import React, { useContext } from "react";
import searchIcon from "./assets/search.png";
import homeIcon from "./assets/white-home.png";
import UserContext from "./User/User.js";

function Navbar(props) {
    const user = useContext(UserContext);

    return (
        <div id="navbar">
            <div id="nav-title">Supers Team-Up</div>
            <ul id="nav-list">
                <li><a className="nav-link" href="./HomePage.js" target="_self"><img src={homeIcon} id="icono-home" alt="icono-home" height="45px" /></a></li>
                <li><a className="nav-link" href="./SearchPage.js" target="_self"><img src={searchIcon} id="icono-buscador" alt="icono-buscador" height="30px" /></a></li>
                <li><h3 id="nav-user">Bienvenido/a, {user.name}.</h3></li>
            </ul>
        </div>
    );
}

export default Navbar;