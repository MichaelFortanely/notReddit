import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Body from './Body';
import Homepage from './Homepage'
import NotFound from './NotFound';

function App() {
  return (
  <>
    <Routes>
      <Route path="/"/>
      <Route path="/home" element={<Homepage/>}>
        <Route path="page" element={<Body/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  );
}

export default App;
//note that I can easily take out the div that maps over the posts