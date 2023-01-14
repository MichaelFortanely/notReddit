import React from 'react'
import Post from './Post'
import CommentThread from './CommentThread'
import { useState, useEffect } from 'react'
//this will be the page I redirect to
const PostPage = () => {
    const[responseComments, setResponseComments] = useState([])
    const[mainComment, setMainComment] = useState([])
    // .substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length).split('%20').join(' ')
    //  let subName = window.location.href
    //  let array = window.location.href.split('/')
    // //  two parameters used for getting parmeters used with api
    // let postID = ""
    // let subredditName = ""
    //  console.log(array)
     console.log('heresss')
    // useEffect(() => {
    //     //do a fetch for all of the posts in this subreddit
    //     async function getapi(url) {
    
    //         // Storing response
    //         const response = await fetch(url, {
    //             mode: "cors",
    //             headers: {"Content-Type": "application/json"}});
            
    //         // Storing data in form of JSON
    //         var data = await response.json();
    //         console.log(data);
    //         setResponseComments(data)
    //     }
    //     console.log('here')
    //     console.log('Name of this sub is' + subName)
    //     //to make a call to the api i will need 3 parameters -> subreddit name, postID, and method
    //     //the methods are to either get the main comment or to get the responses to it
    //     // getapi(`http://localhost:9000/subs/${subName.split(' ').join('%20')}`)
    // }, [])
  return (
    
    <div>
        HEllO FROM THE POSY PAGE
    </div>
  )
}

export default PostPage