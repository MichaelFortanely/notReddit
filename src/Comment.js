import React from 'react'
import { useState, useEffect } from 'react'
import {BACKEND_URL} from './config.js'

const Comment = ({commentID}) => {
  console.log('INSIDE COMMENT\n\n: ' + commentID)
  const[comment, setComment] = useState("")
  useEffect(() => {
     async function _internal(url) {
         const response = await fetch(url, {
             mode: "cors",
             headers: {"Content-Type": "application/json"}});
         
         // Storing data in form of JSON
         var data = await response.json();
         console.log('Comment\n\n\nhskhskskhksh: ')
         console.log(data[0].body)
         console.log(typeof comment.timestamp)
         setComment(data[0])
         }
     _internal(`${BACKEND_URL}comments/by_id/${commentID}`)
 }, [])
  return (
    <>
    <div style={{backgroundColor: '#f5eeed', padding: "15px", margin: '5px', width: '70%'}} >
      <div style={{position: 'relative', left: '20vw'}}>
        Posted by u/{comment.user} on {new Date(comment.timestamp).toLocaleString("en-us", { month: "long", day: "numeric", year: "numeric" })}
      </div><br/>
      <div style={{left: '5vw', position: 'relative'}}>
        {comment.body}
      </div>
      <div><br/>
        {comment.upvotes}
      </div>
    </div>
    </>
  )
}

export default Comment