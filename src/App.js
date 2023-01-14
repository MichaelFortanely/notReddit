import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Body from './Body';
import Homepage from './Homepage'
import NotFound from './NotFound';
import Subreddit from './Subreddit';
import Logo from './images/Logo.jpeg'

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Homepage/>}>
        <Route path="home" element={<Body/>}/>
        <Route path="subs/:subRedName" element={<Subreddit/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  );
}

export default App;
//note that I can easily take out the div that maps over the posts