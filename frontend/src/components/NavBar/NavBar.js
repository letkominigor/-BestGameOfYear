import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { useSelector, useDispatch } from 'react-redux';
import { AUTH_LOGOUT } from "../../store/auth/actionTypes";

export default function NavBar(){
    const user = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = React.useCallback((event) => {
        event.preventDefault();
        fetch("/logout")
        .then(res => {
            dispatch({type: AUTH_LOGOUT});
            navigate("/");
        });
    });

    return(
            (user.login && (<nav className="navMenu">
            <div className="navMenu" style={{'fontSize':'23px'}}>{user.login}{" "}</div>
            <div className="navMenu" style={{'fontSize':'23px'}} >Points:{" "}{user.scores}</div>
                <NavLink to="/game">Играть</NavLink>
                <NavLink to="/logout" onClick={logoutHandler}>Выход</NavLink>
                <div className="dot"></div>
            </nav>)) 
            || 
            (<nav className="navMenu">
                <NavLink to="/registration">Регистрация</NavLink>
                <NavLink to="/login">Вход</NavLink>
                <div className="dot"></div>
            </nav>
            )

    );
}
