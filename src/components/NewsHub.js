import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddNews from './AddNews';
import ViewNews from './ViewNews';

export default function NewsHub() {
        return (
        <Router>
            <Redirect from='/' to={"/viewnews"}/>
          <div>
              <h1>FDM News</h1>
              <nav className='messagehub'>
                <li>
                    <Link className='navbtn' to="/addnews">Add announcement</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/viewnews">View News</Link>
                  </li>
              </nav>
                <Switch>
                  <Route path="/viewnews">
                    <ViewN />
                  </Route>
                  <Route path="/addnews">
                    <AddNews/>
                  </Route>
                  <Route path="/" exact component={() => <ViewNews/>}/>
                </Switch>
              </div>
            </Router>
        );
}

function ViewN(){
  return <ViewNews/>;
}

function Add(){
  return <AddNews/>;
}

