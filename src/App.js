import React from 'react';
import Ninjas from './Ninjas';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h2>My First App </h2>
      <p>Welcome......!!!</p>
      <Ninjas/>
      </div>
    );
  }
}

export default App;
