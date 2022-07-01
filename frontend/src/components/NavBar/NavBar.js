import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
        <nav className="navMenu">
            <NavLink to="/game">Играть</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/logout">Выход</NavLink>
            <div className="dot"></div>
        </nav>
    );
}
