import React from 'react';
import Ninjas from './Ninjas';
import './App.css';

class App extends React.Component {

  state = {
    ninjas :[
      { name:'Kumaran', age:'30', belt:'Green', id:1 },
      { name:'Kalakeya', age:'40', belt:'Blue', id:2 },
      { name:'Agent', age:'62', belt:'Red', id:3 },
      { name:'Agematter', age:'69', belt:'black', id:4 }
    ]
  }
  render() {
    return (
      <div className="App">
      <h2>My First App </h2>
      <p>Welcome......!!!</p>
      <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
