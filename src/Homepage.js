import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from './images/reddit.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'
// href="subs/

const Homepage = () => {
let usersFavSubreddit = ['AITA', 'Books', 'Pics', 'Surreal Memes']
const [search, setSearch] = useState('')
const [options, setOptions] = useState([])
// const [isLoggedIn, setIsLoggedIn] = useState(false)
// let isLoggedIn = false
// if(){
//     sessionStorage = 
// }
useEffect(() => {
    //do a fetch for all of the posts in this subreddit
    setOptions([])
    async function getapi(url) {

        // Storing response
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"}});
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data.map(item => item.title));
        console.log(data)
        setOptions(data)
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

<form className='searchForm'>
        <label htmlFor='search'></label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder="Search posts by title or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <div id="list-of-options">
            {options.map(function(option){
                return <option>{option.title}</option>
            })}
        </div>
    </form>
                {/* {(<button className='login-button'  onClick={routeChange}>Log in</button>) && true}
                {<button className='login-button' id="logout"  onClick={routeChange}>Log in</button> && !isLoggedIn} */}
                <Button/>
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