import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Button = () => {

const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("user") === null ? false: true)
let first = true

    let navigate = useNavigate(); 
    const doLogIn = () =>{ 
        if(sessionStorage.getItem("user") === null){
            setIsLoggedIn(true)
            let path = '/login'; 
            document.querySelector(".login-button").setAttribute("id", "logout");
            document.querySelector(".login-button").innerText = 'Logout'
            navigate(path);
        } else{
            sessionStorage.removeItem("user")
            setIsLoggedIn(false)
            document.querySelector(".login-button").removeAttribute("id");
            document.querySelector(".login-button").innerText = 'Login'
        }
    }
    
    useEffect(() => {
        if(first){
            if(!isLoggedIn){
                //if not logged in
                sessionStorage.setItem("user", null)
                document.querySelector(".login-button").removeAttribute("id");
                document.querySelector(".login-button").innerText = 'Login'
            } else{
                document.querySelector(".login-button").setAttribute("id", "logout");
                document.querySelector(".login-button").innerText = 'Logout'
            }
        }
}, [])

    return (
        <button className='login-button' onClick={doLogIn}>Login</button>
        )
}

export default Button