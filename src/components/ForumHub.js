import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuestionPage from './QuestionPage';
import AskQuestion from './AskQuestion';

export default function ForumHub() {
        return (
        <Router>
            <Redirect from='/' to={"/questionpage"}/>
          <div>
              <h1>FDM Forum</h1>
              <nav className='messagehub'>
                <li>
                    <Link className='navbtn' to="/questionpage">View Questions</Link>
                  </li>
                  <li>
                      <Link className='navbtn' to="/askquestion">Ask Question</Link>
                  </li>
              </nav>
                <Switch>
                  <Route path="/questionpage">
                    <QPage />
                  </Route>
                  <Route path="/askquestion">
                      <Ask/>
                  </Route>
                  <Route path="/" exact component={() => <QPage/>}/>
                </Switch>
              </div>
            </Router>
        );
}

function QPage(){
  return <QuestionPage/>;
}

function Ask(){
    return <AskQuestion/>;
}

