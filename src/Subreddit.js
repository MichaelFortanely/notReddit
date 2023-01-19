import React from 'react'
import Post from './Post'
import { useEffect, useState } from 'react';
import {BACKEND_URL} from './config.js'

const Subreddit = () => {
    const[postsStub, setPostsStub] = useState([])
    let subName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length).split('%20').join(' ')
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
            setPostsStub(data)
        }
        getapi(`${BACKEND_URL}posts/ALL/${subName.split(' ').join('%20')}`)
    }, [subName])
  return (
  <div>
        <h1 className='sub-name'>
            {window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length).split('%20').join(' ')}
        </h1>
        <div className='background subreddit' style={{position: 'relative'}}>
            {postsStub.map(function(post){
            return <Post key={post.postId} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body} title={post.title}/>
            })} 
        </div>
    </div>
)
}

export default Subreddit

