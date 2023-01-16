import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from './images/reddit.jpg'
import Post from './Post'
// href="subs/

const Homepage = () => {
let usersFavSubreddit = ['AITA', 'Books', 'Pics', 'Surreal Memes']

   
  return (
    <div id="#scroll-parent">
        <div>
            <nav className='top'>
                <h3>notReddit</h3>
                <img style={{width: '60px', left: '160px', top: '10px'}} src={Logo} alt="Upside down reddit logo"/>
                <input type="text" placeholder="Search subreddit by name.."></input>
                <button className='login-button' onClick={() => console.log('login')}>Log in</button>
            </nav>
            <div style={{position: 'fixed', top: '100px'}}>
                <nav className='side'>
                    <center><a style={{fontSize: "30px"}} href='/home'>Home Page</a></center>
                    {usersFavSubreddit.map(function(subreddit){
                        return <a onClick={() => {
                        }}href={`/subs/${subreddit}`}>{subreddit}</a>
                    })}
                </nav>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Homepage