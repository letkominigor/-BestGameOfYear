import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTH_REG } from '../../store/auth/actionTypes';
import "./Registration.css"

export default function Registration(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registrHandler = React.useCallback((event) => {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;
        fetch("/registrate", {
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
            if(responce.isRegistration === false){
                alert("Такой пользователь уже существует")
            }
            else{
                dispatch({type: AUTH_REG, payload:responce});
                navigate("/");
            }
        });
      }, [dispatch]);


    return(
        <div className="card">
            <div className="card-image">
                <h2 className="card-heading">
                    Добро пожаловать
                </h2>
            </div>
            <form className="card-form" onSubmit={registrHandler} >
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
                    <button type="submit" className="action-button">Зарегестрироваться</button>
                </div>
            </form>
        </div>
    );
}
