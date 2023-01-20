import React from 'react'
import { useState} from 'react'
import {BACKEND_URL} from './config.js'


const VoteButtons = ({upvotes, postID}) => {
    console.log('upvotes ' + upvotes)
    const [voteChange, setVoteChange] = useState(upvotes)
    console.log('voteChange: ' + voteChange)
    const [topClick, setTopClick] = useState(false)
    const [bottomClick, setBottomClick] = useState()

    async function voteApi(url, count) {
        // Storing response
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify({
              count: count,
              user: sessionStorage.getItem("user")
            })},);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log('response from patch request: ' + data);
    }
  return (
    <div>
            {voteChange}
            <i className="arrow up" onClick={(e) => {
                if(sessionStorage.getItem("user") !== null){
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
            } else{
                alert('You must log in')
            }}}></i>
            <i className="arrow down" onClick={(e) => {
                // setVoteChange(voteChange + (numClicks % 2 !== 1? -1: 1))
                // top and !bottom -> - 2
                //!top and bottom -> + 1
                // !top and !bottom -> - 1
                if(sessionStorage.getItem("user") !== null){
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
            } else{
                alert('You must log in')
            }}}></i>
        </div>
  )
}

export default VoteButtons