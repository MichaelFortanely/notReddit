import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {vote, comment} from './commentsSlice'

const Comments = () => {

const comments = useSelector(state => state)
const dispatch = useDispatch()

return (
    <>
{/* comments is the only state object and I need to retrieve it */}
        {Object.values(comments)[0].map(function(c){
            return  (
            <>
                <div>
                    <button onClick={() => dispatch(vote(c.id))}>Votes </button>{"\t" + c.upvotes}
                </div>
                <div>
                    <button onClick={() => dispatch(comment(c))}>Comment </button>{"\t" + c.commentBody}
                </div>
            </>
            )
        })}
    </>
    )
}

export default Comments