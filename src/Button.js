import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Button = () => {
    const [karma, setKarma] = useState(0)
    async function getUserKarma(url) {
        //just fetch user
        // Storing response
        console.log('url: ' + url)
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"}
        });
        console.log('\n\n\n\n\n\n234534534')
        // Storing data in form of JSON
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx')
        var data = await response.json();
        console.log('JEERRRRRRRRRREREEEEEEEEE')
        console.log('DATA: ')
        console.log(data[0].karma)
        setKarma(data[0].karma)
    }
    getUserKarma(`http://localhost:9000/users/get_votes/${sessionStorage.getItem("user")}`)
   

//let me also fetch the karma

const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("user") === null ? false: true)
let first = true
let userKarma = -1
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
        <>
            <button className='login-button' onClick={doLogIn}>Login</button>
            <div style={{position: 'relative', left: '88vw', top: '-10vh'}}>
                {sessionStorage.getItem("user") || "Guest"} <br/>Karma: {karma}
            </div>
        </>
        )
}

export default Button