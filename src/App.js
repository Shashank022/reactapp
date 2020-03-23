import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { id: 'dsa', name : 'Max' , age : 28 },
      { id: 'dkjh', name : 'Manohar' , age : 32 },
      { id: 'vxcd', name : 'Kumar' , age : 32 },
    ],
    othserState: 'other value',
    showPersons : false
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  
  nameChangeHandler= ( event, id )=>{
    //console.log("Event is called....!!");

    const person = this.state.persons.findIndex();
    this.setState({
      persons : [
          { name : 'Maxmillian' , age : 28 },
          { name : 'Kumanaran' , age : 32 },
          { name : 'Sangakara' , age : 32 },
      ],
    })
  }

  deletePersonHandler(personIndex){
    //const persons = this.state.persons.slice();
    const persons  = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons})
  }

  render() {
      const style = {
        background :'white',
        font : 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      let persons = null;

      if(this.state.showPersons){
         persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age= {person.age}
              key={person.id}
              changed= {() => this.nameChangeHandler()}
              />
            })}
 
        </div>
         );
      }


    return (
      <div className="App">
        <h1>Hi I am new React App </h1>
        <p>This is really working</p>
        <button 
        style ={style}
        onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
        </div>
      );
   //  return React.createElement('div', null, React.createElement('h1', {className:'App' },' This is working now..!!'));
  }
}

export default App;
