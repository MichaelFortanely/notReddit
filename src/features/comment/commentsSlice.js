import {createSlice} from '@reduxjs/toolkit'

//why is can't i see the initial state of the commments
const initialState = [{
    id: 0,
    user: "BleachWizard420",
    timePosted: 'March 10, 2022',
    commentBody: "Yesterday, I had issues logging in to my facebook account on my computer and went to borrow my husband's laptop to see if I could log in frok there. The laptop was in his bag and he left for work shortly after.",
    upvotes: 42069,
    nestedReplies: {}
}, {
    id: 1,
    user: "Anotheruser",
    timePosted: 'November 11, 1914',
    commentBody: "Victory in Europe over Germany and Austro-Hungary in World War 1",
    upvotes: 666,
    nestedReplies: {}
}]

const commentsSlice = createSlice({
    name: 'comments',
    //just put this comment stub for now
    initialState,
    reducers: {
        vote(state, action){
            // console.log(Object.values(state)[0])
            console.log(action.payload)
            state[action.payload].upvotes += 1;
            // console.log(action.payload.upvotes)
            // action.payload.upvotes += 1
        },
        comment(state, action){
            console.log(state, action)
        }
    }
})


export const {vote, comment} = commentsSlice.actions
export const commentsSliceReducer =  commentsSlice.reducer


//I think this entire file is unneeded