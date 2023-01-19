import React from 'react'
import { useState } from 'react'
import {BACKEND_URL} from './config.js'

const Post = ({postID, isMainPost, subreddit, user, timestamp, upvotes, body, title}) => {
    console.log('upvotes ' + upvotes)
    const [first, setFirst] = useState(true)
    const [voteChange, setVoteChange] = useState(upvotes)
    console.log('voteChange: ' + voteChange)
                // if(voteChange === undefined){
                //     console.log('here upvotes: ' + upvotes)
                //     setVoteChange(upvotes)
                // }
    const [topClick, setTopClick] = useState(false)
    const [bottomClick, setBottomClick] = useState()
    const date = new Date(timestamp);
    const formattedTimestamp = date.toLocaleString("en-us", { month: "long", day: "numeric", year: "numeric" });
   isMainPost = isMainPost || false
   async function voteApi(url, count) {

    // Storing response
    const response = await fetch(url, {
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        method: 'PATCH',
        body: JSON.stringify({
          count: count,
        })},);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log('response from patch request: ' + data);
}
  return (
    <div className='post-container'>
        <div className='post-top'>
            <span id='reddit'>r/{subreddit}</span><span id='not-reddit'>&emsp; Posted by u/{user} on {formattedTimestamp}</span>
            <span>
                <button className='join-button'>Join</button>
            </span>
        </div> 
            {!isMainPost && 
        <div>
            {voteChange}
            <i className="arrow up" onClick={(e) => {
                setFirst(false)
                // console.log(e.target.classList)
                // console.log(e.target.parentElement.children)
                // setVoteChange(voteChange)
                // top and !bottom -> -1
                //!top and bottom -> + 2
                // !top and !bottom -> + 1
                let makeOneCall = 0

                if(topClick){
                    setVoteChange(voteChange - 1)
                    makeOneCall = -1
                    setTopClick(false)
                    e.target.classList.remove("clicked");
                }
                else {
                    setTopClick(true)
                    e.target.classList.add("clicked");
                    if(bottomClick){
                        makeOneCall = 2
                        setVoteChange(voteChange + 2)
                    } else{
                        makeOneCall = 1
                        setVoteChange(voteChange + 1)
                    }
                 }
                setBottomClick(false)
                voteApi(`${BACKEND_URL}posts/vote/${postID}`, makeOneCall)
                console.log(e.target.classList)
                e.target.parentElement.children[1].classList.remove("clicked");
            }}></i>
            <i className="arrow down" onClick={(e) => {
                // setVoteChange(voteChange + (numClicks % 2 !== 1? -1: 1))
                // top and !bottom -> - 2
                //!top and bottom -> + 1
                // !top and !bottom -> - 1
                let makeOneCall = 0
                if(bottomClick){
                    setBottomClick(false)
                    setVoteChange(voteChange + 1)
                    makeOneCall = 1
                    e.target.classList.remove("clicked");
                }
                else {
                    setBottomClick(true)
                    e.target.classList.add("clicked");
                    if(topClick){
                        makeOneCall = -2
                        setVoteChange(voteChange - 2)
                    } else{
                        makeOneCall = -1
                        setVoteChange(voteChange - 1)
                    }
                }
                setTopClick(false)
                voteApi(`${BACKEND_URL}posts/vote/${postID}`, makeOneCall)
                console.log(e.target.classList)
                e.target.parentElement.children[0].classList.remove("clicked");
            }}></i>
        </div>
}
      <center>
        <h3 style={{position: 'relative', left: '-100px'}}>{title}</h3>
        <div className='post-body' style={{width: '70%'}} onClick={() => window.location.href = `http://localhost:3000/posts/${postID}/${subreddit}`}>{body}</div>
        
            {isMainPost && 
            <form onSubmit={(e) => {
                //in the postpage I will add the comments to be where the posts not on that page should have been
                //add the comment
                e.preventDefault()
                console.log('submitted')
            }
            }>
                <textarea onClick={(e) => e.preventDefault()} id='response' placeholder="What are your thoughts?"></textarea>
                <button type="submit" style={{width: '5vw', left: '-500px', position: 'relative'}}>Post Comment</button>
            </form>
            }</center>
        
    </div>
  )
}

export default Post