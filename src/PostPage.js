import React from 'react'
import Post from './Post'
import Comment from './Comment'
import { useState, useEffect } from 'react'
import {BACKEND_URL} from './config.js'

//this will be the page I redirect to
const PostPage = () => {
   
    const[responseComments, setResponseComments] = useState([])
    const[mainComment, setMainComment] = useState("")
    // const [subName, setSubName] = useState("")
    // .substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length).split('%20').join(' ')
    const[postID, setPostId] = useState(window.location.href.split('/')[window.location.href.split('/').length - 2])
    // let postID = array[array.length - 2]
    let array = window.location.href.split('/')
    let subName = array[array.length - 1].split('%20').join(' ')  
    console.log(subName, postID)
    // //  two parameters used for getting parmeters used with api
    useEffect(() => {
        //do a fetch for all of the posts in this subreddit
    
        async function _internal(url) {

            console.log('url' + url)
            // Storing response
            console.log('url in second is ' + url)
            const response = await fetch(url, {
                mode: "cors",
                headers: {"Content-Type": "application/json"}});
            
            // Storing data in form of JSON
            var data = await response.json();
            console.log('data')
            console.log(data[0].upvotes)
            setMainComment(data[0])
            // console.log('data.body is ' + data.body)
            // console.log(data.body)
                console.log('adsfasdfasasd\n\n\n\nHERERERE')
            // Storing response
            const post = await fetch(`${BACKEND_URL}posts/ALL/1/${postID}`, {
                mode: "cors",
                headers: {"Content-Type": "application/json"},
            });
            
            // Storing data in form of JSON
            var postReceived = await post.json();
            // console.log('PRINTING OUT THE postRe\n\n\n\\n')
            // console.log(postReceived[0].commentThreads)
            setResponseComments(postReceived[0].commentThreads)
            //for each comment 
            }
        //to make a call to the api i will need 3 parameters -> subreddit name, postID, and method
        //the methods are to either get the main comment or to get the responses to it
        _internal(`${BACKEND_URL}posts/ALL/1/${postID}`)
        // console.log('mainComment.upvotes ' + mainComment.upvotes)
        // setVotes(mainComment.upvotes)
    }, [])




  return (
    <div>
        <h1 className='sub-name' style={{zIndex: '-1', position: 'relative'}}>
                r/{subName}
        </h1>
        <div className='background' style={{position: 'relative'}}>
            <Post key={mainComment.postId} isMainPost={true} postID={mainComment.postID} subreddit={mainComment.subreddit} user={mainComment.user} timestamp={mainComment.timestamp} upvotes={mainComment.upvotes} body={mainComment.body} title={mainComment.title}/>
        </div>
        <div style={{height: '10vh',}}></div>
        <div className='background' style={{position: 'relative'}}>
            {/* {responseComments.map(function(post){
            return <Post key={post.postId} isMainPost={false} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body} title={post.title}/>
            })}  */}
        {responseComments.map(function(commentID) {
            return <Comment commentID={commentID}/>
        })}
        </div>
    </div>
  )
}

export default PostPage