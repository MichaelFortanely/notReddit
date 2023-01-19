import React from 'react'
import { useNavigate } from "react-router-dom";
import {BACKEND_URL} from './config.js'

const Login = () => {
  let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = '/home'; 
  navigate(path);
}
  return (
    <>
    <center> <h1> notReddit Login page </h1>   
    <form onSubmit={(event) => {
    event.preventDefault();
    let arr = document.querySelectorAll('input')
    console.log(arr[0].value, arr[1].value)
    async function getapi(url) {
    
      const response = await fetch(url, {
          mode: "cors",
          headers: {"Content-Type": "application/json"}, 
          method: "POST",
          body: JSON.stringify({
            user: arr[0].value,
            password: arr[1].value
          })});
      
      var data = await response.json();
      console.log(data);
      if(data.status === 200){
        sessionStorage.setItem("user", arr[0].value) 
        routeChange()
      } else{
        sessionStorage.clear()
      }
      console.log("sessionStorage.getItem(\"user\"): " + sessionStorage.getItem("user"))
      console.log(data.status)
      if(data.status === 300){
        alert(data.message)
      }
  }
  getapi(`${BACKEND_URL}users/`)
  }
}>  
        <div style={{display: 'flex', flexDirection: 'column', width: '15vw'}}>   
            <label className='class'>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <br/>
            <label className='class'>Password : </label>
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <br/>
            <center><button type="submit" style={{width: '5vw'}}>Login</button></center>
            
        </div>   
    </form>   
    </center> 
    </>
  )
}

export default Login