import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from './images/reddit.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
// href="subs/

const Homepage = () => {
let usersFavSubreddit = ['AITA', 'Books', 'Pics', 'Surreal Memes']
const [search, setSearch] = useState('')
useEffect(() => {
    //do a fetch for all of the posts in this subreddit
    async function getapi(url) {

        // Storing response
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"}});
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        // setPostsStub(data)
    }
    getapi(`http://localhost:9000/posts/search/${search}`)
    console.log('search: ' + search)
}, [search])
  return (
    <div id="#scroll-parent">
        <div>
            <nav className='top'>
                <h3>notReddit</h3>
                <img style={{width: '60px', left: '160px', top: '10px'}} src={Logo} alt="Upside down reddit logo"/>
                {/* <input type="text"  value={search}
            onChange={(e) => setSearch(e.target.value)} onSubmit={() => console.log('Search is' + search)}></input> */}

<form className='searchForm' onSubmit={(e) => { e.preventDefault() 
        console.log('search is: ' + search)
        let suggestions = ""
        console.log('suggestions: ' + suggestions)
        }}>
        <label htmlFor='search'></label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder="Search posts by title or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>


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