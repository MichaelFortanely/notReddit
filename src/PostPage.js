import React from 'react'
import Post from './Post'
import CommentThread from './CommentThread'
import { useState, useEffect } from 'react'
//this will be the page I redirect to
const PostPage = () => {
    const[responseComments, setResponseComments] = useState([])
    const[mainComment, setMainComment] = useState("")
    // .substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length).split('%20').join(' ')
     let array = window.location.href.split('/')
    let postID = array[array.length - 2]
    let subName = array[array.length - 1].split('%20').join(' ')
    console.log(subName, postID)
    console.log('before spltL ' + array[array.length - 2])
    // //  two parameters used for getting parmeters used with api
    useEffect(() => {
        //do a fetch for all of the posts in this subreddit
        async function getapi(url) {
    
            // Storing response
            const response = await fetch(url, {
                mode: "cors",
                headers: {"Content-Type": "application/json"}});
            
            // Storing data in form of JSON
            var data = await response.json();
            console.log('data is ' + data);
            setResponseComments(data)
            console.log('here')
            console.log('Name of this sub is' + subName)
        }
        //to make a call to the api i will need 3 parameters -> subreddit name, postID, and method
        //the methods are to either get the main comment or to get the responses to it
        getapi(`http://localhost:9000/subs/${subName}/`)
    }, [])
  return (
    <div>
        <h1 className='sub-name'>
            {subName}
        </h1>
        <div className='background' style={{position: 'relative'}}>
            {responseComments.map(function(post){
            return <Post key={post.postId} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body}/>
            })} 
        </div>
    </div>
  )
}

export default PostPage