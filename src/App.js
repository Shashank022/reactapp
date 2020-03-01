import React from 'react';
import Person from './Person/Person';
import './App.css';

class App extends React.Component {

state = {
  persons :[
    {name:"Rajendra" , age:29},
    {name:"Cherry" , age:16},
    {name:"Apple" , age:12}
  ]
}

switchNameHandler= () =>{
   this.setState({persons :[
    {name:"Sunny" , age:29},
    {name:"Mahendra" , age:16},
    {name:"Kumara Chinna" , age:12}
  ]})
}


  render() {
    return (
      <div className="App">
      <h2>My First App </h2>
      <p>Welcome......!!!</p>
      <button onClick={this.switchNameHandler}>Switch</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
