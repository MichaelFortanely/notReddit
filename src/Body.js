import React from 'react'
import Post from './Post';
import {useEffect, useState} from 'react'
import {BACKEND_URL} from './config.js'
import SortButtons from './SortButtons';

const Body = () => {
  const[postsStub, setPostsStub] = useState([])
  const[sortUpvotes, setSortUpvotes] = useState(false)
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
    getapi(`${BACKEND_URL}posts/ALL/`)
}, [])
    useEffect(() => {
        console.log(window.location.href)
    }, [])
  return (
    <div>
        {/* <SortButtons sortUpvotes={sortUpvotes} setSortUpvotes={setSortUpvotes} /> */}
        <h1 style={{position: 'absolute', top: '50px', fontSize: '100px', left: '700px', zIndex: '-1'}}>Home</h1>
        <div className='background' style={{position: 'relative'}}>
    {postsStub.sort((a, b) => b.upvotes - a.upvotes).map(function(post){
      return <Post key={post.postID} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body} title={post.title}/>
    })}
     </div>
  </div>
  )
}

export default Body