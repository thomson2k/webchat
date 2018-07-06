import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Conversation (props) {
    return (
      <div className="conversation">
        {props.list.map(statement => (
          <div className="statement">
            {statement}
          </div>
        ))}
      </div>
    );
  }


class App extends Component {
  render() {
    const list = [
      'for',
       'example'
    ]
    return (
      <div>
        <Conversation list={list} />
      </div>
    );
  }
}

export default App;
