import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Directory.css';

class DirectoryCard extends React.Component {

    state = {
        loading: true,
        message: null
    }

    async componentDidMount(){
        const url = 'http://localhost:8000/directory.php';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({directory: data, loading: false})
        console.log(data[0]);
    }

  render() {
      return (
        <div className='directory'>
            <div>
                <h1>Directory</h1>
                {this.state.loading || !this.state.directory ? <div>Loading...</div> :
                    this.state.directory.reverse().map(res => (
                        <div>
                            <div className="namebox">
                                <h3>{res.first_name} {res.last_name}</h3>
                            </div>
                            <div className='details'>
                                <p id='det'>{res.email}</p>
                                <p id='det'>{res.mobile}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        
    );
  }
}

export default DirectoryCard;