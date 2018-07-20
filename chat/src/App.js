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

  constructor(props) {
    super(props)

    this.state = {
      statements: []
    }
  }

  componentDidMount () {
    setInterval(() => {
      fetch('/statements')
        .then(resp => resp.json())
        .then(statements => {
          this.setState({
            statements: statements
          })
        })
    }, 1000)
  }

  render() {
    const list = [
      'for',
      'example',
      'asd'
    ]
    return (
      <div>
        <Conversation list={this.state.statements} />
      </div>
    );
  }
}

export default App;
