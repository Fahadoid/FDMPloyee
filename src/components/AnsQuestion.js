import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Messages.css';

class AnsQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: props.id, body: ''}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/answer_question.php';
        var email = localStorage.getItem("email");
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q_id: this.state.id.id,
                body: this.state.body,
                responder: email,
            })
        }).then(response => response.json())
            .then(data => this.storeData(data))
    }

    storeData = (data) => {
        var success = data['success'];
        if (success){
            this.setState({success: true});
        }
    }

    handleBodyChange = (event) => {
        this.setState({body: event.target.value});
        event.preventDefault();
    }

    render() {
        if (this.state.success){
            this.setState({success: false});
            return <Redirect to="/home"/>
        }
        return (
            <div className='message'>
                <h3>Answer Questions</h3>
                <div>
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className='inputspace'>
                            <label>Answer Question: </label>
                            <input type="mtext" id='ans' value={this.state.body} onChange={this.handleBodyChange}
                                   name='ans' placeholder='Enter your answer'/>
                        </div>
                        <button type="submit">Answer</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AnsQuestion;