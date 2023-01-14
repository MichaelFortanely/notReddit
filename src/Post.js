import React from 'react'
import { useState } from 'react'

// post{
//     postId: uuid(),
//     subreddit: 'WhitePeopleTwitter',
//     user: "u/light_happiness53",
//     timestamp: "June 10, 2018",
//     upvotes: 33900,
    //    body: " asdfasdfasdfasdf"
       
// }
const Post = ({subreddit, user, timestamp, upvotes, body}) => {
    const [voteChange, setVoteChange] = useState(upvotes)
    const [topClick, setTopClick] = useState(false)
    const [bottomClick, setBottomClick] = useState()

  return (
    <div className='post-container'>
        <div className='post-top'>
            <span id='reddit'>r/{subreddit}</span><span id='not-reddit'>&emsp; Posted by u/{user} on {timestamp}</span>
            <span>
                <button className='join-button'>Join</button>
            </span>
        </div> 
        <div>
            {voteChange}
            <i className="arrow up" onClick={(e) => {
                // console.log(e.target.classList)
                // console.log(e.target.parentElement.children)
                console.log(e.target.classList);
                // setVoteChange(voteChange)
                // top and !bottom -> -1
                //!top and bottom -> + 2
                // !top and !bottom -> + 1
                if(topClick){
                    setVoteChange(voteChange - 1)
                    setTopClick(false)
                    e.target.classList.remove("clicked");
                }
                else {
                    setTopClick(true)
                    e.target.classList.add("clicked");
                    if(bottomClick){
                        setVoteChange(voteChange + 2)
                    } else{
                        setVoteChange(voteChange + 1)
                    }
                 }
                setBottomClick(false)
                console.log(e.target.classList)
                e.target.parentElement.children[1].classList.remove("clicked");
            }}></i>
            <i className="arrow down" onClick={(e) => {
                // setVoteChange(voteChange + (numClicks % 2 !== 1? -1: 1))
                // top and !bottom -> - 2
                //!top and bottom -> + 1
                // !top and !bottom -> - 1
                if(bottomClick){
                    setBottomClick(false)
                    setVoteChange(voteChange + 1)
                    e.target.classList.remove("clicked");
                }
                else {
                    setBottomClick(true)
                    e.target.classList.add("clicked");
                    if(topClick){
                        setVoteChange(voteChange - 2)
                    } else{
                        setVoteChange(voteChange - 1)
                    }
                }
                setTopClick(false)
                console.log(e.target.classList)
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