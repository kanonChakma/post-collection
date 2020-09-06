import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Container from '@material-ui/core/Container';
import Home from './Component/Home/Home';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import PostDetail from './Component/PostDetail/PostDetail';
import Post from './Component/Post/Post';

function App() {
  return (
    <Container maxWidth="md">
          <Router>
          <Header></Header>
           <Switch>
           <Route path="/bro">
                 <Home></Home>
             </Route>
             <Route path="/Home">
                <Home></Home>
             </Route>
             <Route path="/post/:postId">
                <PostDetail></PostDetail>
             </Route>
             <Route exact path="/">
                   <Home></Home>
             </Route>
             <Route path="*">
               <NotFound></NotFound>
             </Route>
           </Switch>
         </Router>
    </Container>
  )
}
export default App;
