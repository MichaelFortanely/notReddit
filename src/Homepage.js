import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Homepage = () => {
let usersFavSubreddit = ['AITA', 'Pics', 'Surreal Memes', 'facepalm']
  return (
    <>
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
                        let x = '/subs' + subreddit;
                        return <Link to="/subs/AITA">{subreddit}</Link>
                    })}
                </nav>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Homepage