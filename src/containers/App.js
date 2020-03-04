import React, { Component } from 'react';
import './App.css';
//import Radium  from 'radium';
import Person from '../Persons/Person/Person';


class App extends Component {
 state = ({
    persons:[
          { id:'21',name:'Kumar', age:28 },
          { id:'22',name:'Kiran', age:29 },
          { id:'23',name:'Lenin', age:22 }
        ],
        otherState:'some other value',
        showPersons:false
  }); 

switchNameHandler = (newName) => {
  this.setState({
    persons:[
      { name:newName, age:89 },
      { name:'Kiran Reddy', age:29 },
      { name:'Lenin Smith', age:45 }
    ]
    
  });
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})

}

nameChangeHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {
  ...this.state.persons[personIndex]
};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons:persons});

}

render(){

  const style = {
    backgroundColor:'green',
    font:'inherit',
    border:'1x solid blue',
    padding: '8px',
    cursor:'pointer',
    ':hover':{
      backgroundColor:'lightgreen',
      color:'black'
    }
  };

  // eslint-disable-next-line
  let persons = null;

  if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
                return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}  
                age={person.age}
                key={person.id}
                changed={() => this.nameChangeHandler(event, person.id)}
                />
          })}
          </div> 
      )
      style.backgroundColor = 'red';
  }

  let classes =[];

  if(this.state.persons.length <= 2){
      classes.push('red');
  }

  if(this.state.persons.length <= 1){
    classes.push('bold');
}

  return (
    <div className="App">
        <h1>REACT</h1>
        <p className={classes.join(' ')}>This is working...!!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle</button>
          {persons}
    </div>
  );
}
}

export default App;