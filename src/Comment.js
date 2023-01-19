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
         setComment(data[0])

         }
     _internal(`${BACKEND_URL}comments/by_id/${commentID}`)
 }, [])
  return (
    <>
    <div>{comment.body}{comment.user}{comment.upvotes}{comment.timestamp}</div>
    </>
  )
}

export default Comment