import React from 'react'

// post{
//     postId: uuid(),
//     subreddit: 'WhitePeopleTwitter',
//     user: "u/light_happiness53",
//     timestamp: "June 10, 2018",
//     upvotes: 33900,
    //    body: " asdfasdfasdfasdf"
       
// }
const Post = ({postId, subreddit, user, timestamp, upvotes, body}) => {
  return (
    <div className='post-container'>
        <div className='post-top'>
            <span id='reddit'>r/{subreddit}</span><span id='not-reddit'>&emsp; Posted by u/{user} on {timestamp}</span>
            <span>
                <button className='join-button'>Join</button>
            </span>
        </div> 
        <div>
            {upvotes}
            <i className="arrow up" onClick={(e) => {
                // console.log(e.target.classList)
                console.log(e.target.parentElement.children)
                e.target.classList.add("clicked");
                e.target.parentElement.children[1].classList.remove("clicked");
            }}></i>
            <i className="arrow down" onClick={(e) => {
                e.target.classList.add("clicked");
                e.target.parentElement.children[0].classList.remove("clicked");
            }}></i>
        </div>
      <center>
        <div className='post-body' style={{width: '70%'}}>{body}</div>
      </center> 
    </div>
  )
}

export default Post