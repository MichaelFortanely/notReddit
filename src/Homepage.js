import React from 'react'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
        <div>
            <nav className='top'>
                <h3>notreddit</h3>
                <input type="text" placeholder="Search subreddit by name.."></input>
                <button className='login-button' onClick={() => console.log('login')}>Log in</button>
            </nav>
            <div style={{position: 'fixed', top: '100px'}}>
                <nav className='side'>
                    <a href='/'>Home Page</a>
                    <a href='/'>AITA</a>
                    <a href='/'>Pics</a>
                    <a href='/'>Surreal Memes</a>
                    <a href='/'>facepalm</a>
                </nav>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Homepage