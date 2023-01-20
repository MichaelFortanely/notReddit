import React from 'react'
import { useState} from 'react'
import {BACKEND_URL} from './config.js'
import { useEffect } from 'react'


const VoteButtons = ({upvotes, postID, isComment}) => {
    console.log('upvotes ' + upvotes)
    
    const [voteChange, setVoteChange] = useState(upvotes)
    console.log('voteChange: ' + voteChange)
    const [topClick, setTopClick] = useState(false)
    const [bottomClick, setBottomClick] = useState(false)

    async function voteApi(url, count) {
        // Storing response
        // console.log('mikl url ' + url)
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify({
              count: count,
              user: sessionStorage.getItem("user"),
              isComment: isComment
            })},);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log('response from patch request: ');
        console.log(data)
        // return data
        //how to identify the posts that have the same ID
    }

    async function doEffect(url){
        console.log('LOOOOOKUPPPPP')
        console.log(document.querySelector(`.class${postID}`))
        const response = await fetch(url, {
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify({
              count: 0,
              user: sessionStorage.getItem("user"),
              isComment: isComment
            })},);
            var data = await response.json();
            setVoteChange(data.upvotes)
            console.log('liked_posts')
            console.log(data)
            console.log(data.upvotes)
            console.log(data.liked_posts)
            console.log('disliked_posts')
            console.log(data.disliked_posts)
            console.log(document.querySelector(`.class${postID}`))
            console.log('postID : ' + postID)
            console.log('array of both elements')
            let elements = null
            if(isComment === false){
                elements = Array.from(document.querySelector(`.class${postID}`).childNodes).slice(1)
            } else{
                elements = Array.from(document.querySelector(`.class${postID}`).childNodes)
            }
            console.log(elements)
            if(data.liked_posts.indexOf(postID) !== -1){
                console.log('User ' + sessionStorage.getItem("user") + " has post " + postID + " in their liked posts")
                console.log(elements[0])
                elements[0].classList.add('clicked')
                setTopClick(true)
            } 
            if(data.disliked_posts.indexOf(postID) !== -1){
                console.log('User ' + sessionStorage.getItem("user") + " has post " + postID + " in their disliked posts")
                elements[1].classList.add('clicked')
                setBottomClick(true)
            }
    }

    useEffect(() => {
        // let data = voteApi(`${BACKEND_URL}posts/vote/${postID}`, 0)
        // console.log(data)
        // let div = document.querySelector(`.class${postID}`)
        // if(div)
        doEffect(`${BACKEND_URL}posts/vote/${postID}`)
        //TODO disabled for testing
    }, [])

  return (
    <div className={`class${postID}`}>
            {voteChange}
            <i className="arrow up" onClick={(e) => {
                // console.log(element)
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
                // console.log(document.querySelector(`.class${postID}`))
                // let element = Array.from(document.querySelector(`.class${postID}`).childNodes).slice(1)[1]
                // console.log(element)
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