import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SendMessages from './SendMessages';
import ViewMessages from './ViewMessages';

export default function MessageHub() {
        return (
        <Router>
            <Redirect from='/' to={"/sendmessages"}/>
          <div>
              <h1>Messages</h1>
              <nav className='messagehub'>
                <li>
                    <Link className='navbtn' to="/sendmessages">Send Messages</Link>
                  </li>
                  <li>
                    <Link className='navbtn' to="/viewmessages">Inbox</Link>
                  </li>
              </nav>
                <Switch>
                  <Route path="/viewmessages">
                    <View />
                  </Route>
                  <Route path="/sendmessages">
                    <Messages/>
                  </Route>
                  <Route path="/" exact component={() => <SendMessages/>}/>
                </Switch>
              </div>
            </Router>
        );
}

function Messages() {
  return <SendMessages/>
}

function View(){
    return <ViewMessages/>
}