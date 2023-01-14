import React from 'react'
import { Outlet, Link } from 'react-router-dom'
// href="subs/

const Homepage = () => {
let usersFavSubreddit = ['AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm' , 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm', 'AITA', 'Books', 'Pics', 'Surreal Memes', 'facepalm']
  return (
    <div id="#scroll-parent">
        <div>
            <nav className='top'>
                <h3>notReddit</h3>
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