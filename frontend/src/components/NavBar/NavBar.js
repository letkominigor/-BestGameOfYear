import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { useSelector } from 'react-redux';

export default function NavBar(){
    const user = useSelector((state) => state.auth);

    return(
        <nav className="navMenu">
            {user.login}
            <NavLink to="/game">Играть</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/logout">Выход</NavLink>
            <div className="dot"></div>
        </nav>
    );
}
