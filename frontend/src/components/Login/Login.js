import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_LOGIN } from '../../store/auth/actionTypes';
import "../Registration/Registration.css"

export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = React.useCallback((event) => {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;
        fetch("/auth", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login,
                password
            }),
        }).then(responce => responce.json())
        .then(responce => {
            if(responce.islogin === false){
                alert("Логин или пароль не совпадает")
            }
            else{
                console.log(responce)
                dispatch({type: AUTH_LOGIN, payload:responce});
                navigate("/game");
            }
        });
      }, []);


    return(
        <div className="card">
            <div className="card-image">
                <h2 className="card-heading">
                    Добро пожаловать
                    Можете войти
                </h2>
            </div>
            <form className="card-form" onSubmit={loginHandler} >
                <div className="input">
                    <input type="text" className="input-field" 
                        name="login" 
                        autoComplete="off" 
                        required />
                    <label className="input-label">Имя</label>
                </div>
                <div className="input">
                    <input type="password" className="input-field" 
                        name="password" autoComplete="off" 
                        required />
                    <label className="input-label">Пароль</label>
                </div>
                <div className="action">
                    <button type="submit" className="action-button">Войти</button>
                </div>
            </form>
        </div>
    );
}