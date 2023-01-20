import React from 'react'

const SortButtons = ({sortUpvotes, setSortUpvotes}) => {
  return (
    <button onClick={() => {
        setSortUpvotes(!sortUpvotes)
        // setPostsStub([])
        // setPostsStub(postsStub.sort((a, b) => b.upvotes - a.upvotes))
    }} style={{backgroundColor: 'purple', position: 'absolute', left: '40vw', top: '10vh'}}>SORT</button>
  )
}

export default SortButtons