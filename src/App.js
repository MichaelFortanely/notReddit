import './App.css';
import {Routes, Route} from "react-router-dom"
import Body from './Body';
import Homepage from './Homepage'
import NotFound from './NotFound';
import Subreddit from './Subreddit';
import PostPage from './PostPage';
import Login from './Login';
import CreatePost from './CreatePost';

function App() {
  return (
  <>
    <Routes>
      {/* side and top element, not a page user actually visits */}
      <Route path="/" element={<Homepage/>}>
        <Route path="home" element={<Body/>}/>
        {/* <Route index element={}/> */}
          {/*subreddits*/}
        <Route path="subs/" >
          <Route path=":subredditName" element={<Subreddit/>}/>
        </Route>
        <Route path="posts/:postID/:subRedditName" element={<PostPage/>}/>
      </Route>
      <Route path="create/" element={<CreatePost/>} />
      <Route path="login/" element={<Login/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  );
}

export default App;
//note that I can easily take out the div that maps over the posts