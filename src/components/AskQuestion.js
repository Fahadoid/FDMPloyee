import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './Messages.css';

class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', body: ''};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = 'http://localhost:8000/ask_question.php';
        var email = localStorage.getItem("email");
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                asker: email,
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

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
        event.preventDefault();
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
                <h1>Ask Questions</h1>
                <div>
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className='inputspace'>
                            <label>Ask Question: </label>
                            <input type="memail" id='qtitle' value={this.state.title} onChange={this.handleTitleChange}
                                   name='qtitle' placeholder='Enter the Question title'/>
                        </div>
                        <input type="mtext" id='qtext' value={this.state.body} onChange={this.handleBodyChange}
                               name='qtext' placeholder='Type your question here:'/>
                        <button type="submit">Ask</button>
                    </form>
                    <div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AskQuestion;