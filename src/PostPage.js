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

    // onClick={() => window.location.href = `http://localhost:3000/posts/${postID}/${subreddit}`}
    // //  two parameters used for getting parmeters used with api
    useEffect(() => {
        //do a fetch for all of the posts in this subreddit
        async function getapi(url, param) {
    
            // Storing response
            const response = await fetch(url, {
                mode: "cors",
                headers: {"Content-Type": "application/json"}});
            
            // Storing data in form of JSON
            var data = await response.json();
            console.log('data is ' + data);
            if(param === 1){
                setResponseComments(data.filter(post => post.postID !== postID))
            } else{
                setMainComment(data)
            }
        }
        //to make a call to the api i will need 3 parameters -> subreddit name, postID, and method
        //the methods are to either get the main comment or to get the responses to it
        getapi(`http://localhost:9000/posts/ALL/${subName}/`, 1)
        getapi(`http://localhost:9000/posts/ALL/1/${postID}`, 2)
    }, [])

  return (
    <div>
        <h1 className='sub-name'>
            {subName}
        </h1>
        {/* <div className='background' style={{position: 'relative'}}>
            {mainComment.map(function(post){
            return <Post key={post.postId} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body}/>
            })} 
        </div> */}
        <div className='background' style={{position: 'relative'}}>
            {responseComments.map(function(post){
            return <Post key={post.postId} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body}/>
            })} 
        </div>
    </div>
  )
}

export default PostPage