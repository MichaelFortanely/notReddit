import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from './images/reddit.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'
import {BACKEND_URL, FRONTEND_URL, usersFavSubreddit} from './config.js'
// href="subs/

const Homepage = () => {

const [search, setSearch] = useState('')
const [options, setOptions] = useState([])
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
    getapi(`${BACKEND_URL}posts/search/${search}`)
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
                return <option onClick={() => {
                window.location.href = `${FRONTEND_URL}posts/${option.postID}/${option.subreddit}`
                }}>{option.title}</option>
            })}
        </div>
</form>
                <Button/>
                <button className='create-button' style={{position: 'relative', left: '74vw', top: '-19vh'}} 
                onClick={() => {
                    window.location.href = `${FRONTEND_URL}create_post/`
                    }}>New Post</button>
            </nav>
            <div style={{position: 'fixed', top: '100px'}}>
                <nav className='side'>
                    <center><a style={{fontSize: "30px"}} href='/home'>Home Page</a></center>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', height: '60vh'}}> 
                        {usersFavSubreddit.map(function(subreddit){
                            return <a onClick={() => {
                            }}href={`/subs/${subreddit}`}>{subreddit}</a>
                        })}
                    </div>
                </nav>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Homepage