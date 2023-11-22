import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Messages.css';

class AnswerPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {id: props.id};
    }

    state = {
        loading: true,
        answers: null
    }

    async componentDidMount(){
        const url = 'http://localhost:8000/view_answer.php';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id.id,
            })
        });
        const data = await response.json();
        this.setState({answers: data, loading: false})
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.answers ? <div></div> :
                    this.state.answers.reverse().map(res => (
                        <div>
                            <div className='message'>
                                <div>
                                    <h3>Answers</h3>
                                    <div>
                                        <div className='messagebox'>
                                            <p>{res.body}</p>
                                            <p>{res.responder}</p>
                                            <p>{res.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        );
    }
}

export default AnswerPage;