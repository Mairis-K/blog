import React from 'react';
import './App.css';
import 'flexboxgrid'
import Home from './Comp/Pages/home'
import About from './Comp/Pages/about'
import NotFound from './Comp/Pages/404'
import Post from './Comp/Pages/Posts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App = () => {



  return (

    <Router>
      <div className="nav__wrapper">
        <Link className='nav' to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;
      <Link className='nav' to="/about">About</Link>
            &nbsp;&nbsp;&nbsp;
            </div>

            
      <Link to="/post/1">Post</Link>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/post/:id">
          <Post />
        </Route>

        <Route path="/404">
          <NotFound />
        </Route>

      </Switch>
    </Router>


  );
};


export default App;
