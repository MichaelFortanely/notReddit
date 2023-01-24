import React from 'react'
import {BACKEND_URL, FRONTEND_URL} from './config.js'
import VoteButtons from './VoteButtons.js'

const Post = ({postID, isMainPost, subreddit, user, timestamp, upvotes, body, title}) => {
 
    const date = new Date(timestamp);
    const formattedTimestamp = date.toLocaleString("en-us", { month: "long", day: "numeric", year: "numeric" });
   isMainPost = isMainPost || false;


  return (
    <div className='post-container' id={`container${postID}`} style={{background: sessionStorage.getItem(`container${postID}`) === 'true' ? '#F0F0F0': 'white'}}>
        <div className='post-top'>
            <span id='reddit'>r/{subreddit}</span><span id='not-reddit'>&emsp; Posted by u/{user} on {formattedTimestamp}</span>
            <span>
                <button className='join-button'>Join</button>
            </span>
        </div> 
            {!isMainPost && <VoteButtons upvotes={upvotes} postID={postID} isComment={false}/>}
      <center>
        <h3 style={{position: 'relative', left: '-100px'}}>{title}</h3>
        <div className='post-body' style={{width: '70%'}} onClick={() => 
        {
            //figure out whether I am 
                //add mysrySelector(`#container${postID}`))
                sessionStorage.setItem(`container${postID}`, true)
                document.querySelectorAll(`#container${postID}`)[0].style.backgroundColor = '#F0F0F0'
                window.location.href = `${FRONTEND_URL}posts/${postID}/${subreddit}`
        }
        }
            >{body}</div>
        
            {isMainPost && 
            <form onSubmit={(e) => {
                //in the postpage I will add the comments to be where the posts not on that page should have been
                //add the comment
                //make call to comments API here
                e.preventDefault()
                console.log('starting new comment submission')

                async function makeComment(url) {
                    //just fetch user
                    // Storing response
                    console.log('url: ' + url)
                    // console.log(document.querySelector('#response').value)
                    const my_body = JSON.stringify({
                        subreddit: `${subreddit}`, 
                        user: `${sessionStorage.getItem("user")}`, 
                        body: `${document.querySelector('#response').value}`, 
                        isPost: true
                    });
                    console.log('my_body')
                    console.log(my_body)
                    setTimeout(() => {
                        document.location.reload();
                      }, 3000);
                    const response = await fetch(url, {
                        mode: "cors",
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        body: my_body
                    });
                    // Storing data in form of JSON
                    var data = await response.json()
                    console.log('data is : ')
                    console.log(data)
                    alert('Successfully created new comment')
                    
                }//no comments that are empy 
                if(document.querySelector('#response').value.length < 5 || sessionStorage.getItem("user") === null){
                    alert('Comment must be at least 5 characters and you must be logged in')
                } else{
                    makeComment(`${BACKEND_URL}comments/${postID}`)
                }

            }
            }>
                <textarea onClick={(e) => e.preventDefault()} id='response' placeholder="What are your thoughts?"></textarea>
                <button type="submit" style={{width: '5vw', left: '-500px', position: 'relative', backgroundColor: 'blue'}}>Post Comment</button>
            </form>
            }</center>
        
    </div>
  )
}

export default Post