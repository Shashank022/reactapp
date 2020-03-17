import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hi I am new React App </h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name="Kumar" age="28"/>
        <Person name="Suresh" age="32">My Hobbies are : Racing</Person>
        <Person name="Raja" age="25"/>
      </div>
      );
   //  return React.createElement('div', null, React.createElement('h1', {className:'App' },' This is working now..!!'));
  }
}

export default App;
