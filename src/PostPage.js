import React from 'react'
import Post from './Post'
import CommentThread from './CommentThread'
import { useState, useEffect } from 'react'

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
    // onClick={() => window.location.href = `http://localhost:3000/posts/${postID}/${subreddit}`}
    // //  two parameters used for getting parmeters used with api
    useEffect(() => {
        //do a fetch for all of the posts in this subreddit
        async function getapi(url, ) {
    
            console.log('url' + url)
            // Storing response
            const response = await fetch(url, {
                mode: "cors",
                headers: {"Content-Type": "application/json"}});
            
            // Storing data in form of JSON
            var data = await response.json();
            setResponseComments(data.filter(post => post.postID !== postID))
            }

        async function second(url) {

            console.log('url' + url)
            // Storing response
            console.log('url in second is ' + url)
            const response = await fetch(url, {
                mode: "cors",
                headers: {"Content-Type": "application/json"}});
            
            // Storing data in form of JSON
            var data = await response.json();
            console.log('keys of data: ' + data)
            console.log(data[0])
            setMainComment(data[0])
            console.log('data.body is ' + data.body)
            console.log(data.body)
            }
        //to make a call to the api i will need 3 parameters -> subreddit name, postID, and method
        //the methods are to either get the main comment or to get the responses to it
        getapi(`http://localhost:9000/posts/ALL/${subName}`)
        console.log('value of postID var: ')
        console.log(postID)
        second(`http://localhost:9000/posts/ALL/1/${postID}`)
        console.log('mainComment is ');
        console.log(mainComment)
    }, [])

  return (
    <div>
        <h1 className='sub-name'>
            {subName}
        </h1>
        <div className='background' style={{position: 'relative'}}>
            return <Post key={mainComment.postId} isMainPost={true} postID={mainComment.postID} subreddit={mainComment.subreddit} user={mainComment.user} timestamp={mainComment.timestamp} upvotes={mainComment.upvotes} body={mainComment.body}/>
        </div>
        <div style={{height: '10vh',}}></div>
        <div className='background' style={{position: 'relative'}}>
            {responseComments.map(function(post){
            return <Post key={post.postId} isMainPost={false} postID={post.postID} subreddit={post.subreddit} user={post.user} timestamp={post.timestamp} upvotes={post.upvotes} body={post.body}/>
            })} 
        </div>
    </div>
  )
}

export default PostPage