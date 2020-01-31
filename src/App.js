import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'
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

  addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
          ninjas: ninjas
        })

  }

  deleteNinja = (id) => {
  let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas : ninjas
    })

  }
  render() {
    return (
      <div className="App">
      <h2>My First App </h2>
      <p>Welcome......!!!</p>
      <Ninjas  deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
