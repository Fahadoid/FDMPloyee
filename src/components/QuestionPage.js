import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Messages.css';
import AnswerPage from './AnswerPage';
import AnsQuestion from './AnsQuestion';

class QuestionPage extends React.Component {
    state = {
        loading: true,
        question: null
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/view_question.php';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({question: data, loading: false})
    }

    render() {
        return (
            <div className='message'>
                <h1>View Questions</h1>
                {this.state.loading || !this.state.question ? <div></div>:
                    this.state.question.reverse().map(res => (
                        <div>
                            <div className="emailbox">
                                <p>{res.title}</p>
                                <p>{res.asker}</p>
                            </div>
                            <div className='messagebox'>
                                <p>{res.body}</p>
                                <p>{res.date}</p>
                            </div>
                            <Router>
                                <nav className='messagehub'>
                                    <li>
                                        <Link className='navbtn' to="/answerquestion">Answer Question</Link>
                                    </li>
                                    <li>
                                        <Link className='navbtn' to="/viewquestion">View Answers</Link>
                                    </li>
                                    <li>
                                        <Link className='navbtn' to="/close">Close</Link>
                                    </li>
                                </nav>
                                <Switch>
                                    <Route path="/viewquestion">
                                        <Answer id={res.id}/>
                                    </Route>
                                    <Route path="/answerquestion">
                                        <Ans id={res.id}/>
                                    </Route>
                                </Switch>
                            </Router>
                        </div>
                    ))}
            </div>
        );
    }
}

function Answer(id) {
    return <AnswerPage id={id}/>;
}

function Ans(id) {
    return <AnsQuestion id={id}/>;
}

export default QuestionPage;