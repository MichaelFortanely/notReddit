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
        <center>
            <div className='post-top'>
                <span>r/{subreddit}</span>Posted by u/{user} on {timestamp}
                <span>
                    <button className='join-button'>Join</button>
                </span>
            </div> 
        </center>  
        <div className='post-side'>
            {upvotes}
            <i className="arrow up"></i>
            <i className="arrow down"></i>
        </div>
      <center>
        <div className='post-body' style={{width: '70%'}}>{body}</div>
        </center> 
    </div>
  )
}

export default Post