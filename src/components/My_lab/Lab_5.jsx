import React, { useState, useCallback } from "react";
export const LoginForm=()=>{
    const[login,setLogin]=useState("");
    const[password ,setPassword]=useState("");

    const onSubmit = useCallback((event) =>{
        event.preventDefault();
        alert(`Логин: ${login}  Пароль: ${password}`);
    });
    return(
        <form onSubmit={onSubmit}>
            <laber htmlFor="login">Логин</laber>
            <input
            onChange={(event)=>setLogin(event.target.value)}
            value={login}
            id="login"
            name="login"
            type="text"
            />
            <label htmlFor="password">Пароль</label>
            <input
            onChange={(event)=>setPassword(event.target.value)}
            value={password}
            id="password"
            name="password"
            type="password"
            />
            <button type="submit">Войти</button>
            </form>
    );
};