import React from 'react'
import { usersFavSubreddit, BACKEND_URL} from './config'

const NewPost = () => {
    // e.target.firstChild.children.filter(elem => elem.firstChild.checked === false)
  return (
    <div style={{position: 'absolute', top: '12vh', left: '33vw', zIndex: '-1'}}>
        <center>
            <h1>Create New Post</h1>
            <div>
                <textarea className='post-page-text' style={{width: '40vw', height: '4vh'}}></textarea>
            </div>
            <div>
                <textarea className='post-page-text' style={{width: '40vw', height: '50vh'}}></textarea>
            </div>
            <form onSubmit={ (e) => {e.preventDefault(); 
                if(Array.from(e.target.firstChild.children).filter(x => x.firstChild.checked === true).length === 1){
                    //do a submit
                    let x = document.querySelectorAll('.post-page-text')
                    x.forEach(x => console.log(x.value))
                    if(x[0].value.length < 10){
                        alert('The title must be at least 10 characters')
                    } else if (x[1].value.length < 50){
                        alert('The body must be at least 50 characters')
                    } else if(sessionStorage.getItem("user") === null){
                        alert('You must log in to create a post')
                    }
                    else{
                        // subreddit, title, user, body
                        async function getapi(url) {
                            
                            // Storing response
                            const response = await fetch(url, {
                                mode: "cors",
                                headers: {"Content-Type": "application/json"},
                                method: 'POST',
                                body: JSON.stringify({
                                    subreddit: Array.from(e.target.firstChild.children).filter(x => x.firstChild.checked === true)[0].firstChild.value,
                                    title: x[0].value,
                                    user: sessionStorage.getItem("user"),
                                    body: x[1].value
                                })});
                                
                                // Storing data in form of JSON
                                var data = await response.json();
                                console.log(data);
                                if(response.status === 201){
                                    document.querySelectorAll('.post-page-text').forEach(x => x.value = "")
                                    alert('Post Submitted Successfully :)')
                                }
                        }
                        getapi(`${BACKEND_URL}posts/ALL/`)
                    }
                } else{
                    alert('You must pick a subreddit')
                }
                }}>
                <div className='radio-buttons' style={{display: 'flex', justifyContent: 'space-evenly', margin: '10px'}}>
                    {usersFavSubreddit.map(function(subreddit){
                        return <div className='radio-button-wrapper'>
                                    <input type="radio" id={subreddit} name="subreddit_chosen" value={subreddit}/>
                                    <br/>
                                    <label htmlFor={subreddit}>{subreddit}</label>
                                </div>
                    })}
                </div>
                <div><button className='submit-new-post'>Submit</button></div>
            </form>
            
        </center>
    </div>
  )
}

export default NewPost