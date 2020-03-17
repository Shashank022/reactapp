import React, { Component } from 'react';
import classes from './App.css';
//import Radium  from 'radium';
import Persons from '../components/Persons/Persons';


class App extends Component {
 
 constructor(props){
    super(props);
    console.log('[App.js] constructor');
  } 
  state = ({
    persons:[
          { id:'21',name:'Kumar', age:28 },
          { id:'22',name:'Kiran', age:29 },
          { id:'23',name:'Lenin', age:22 }
        ],
        otherState:'some other value',
        showPersons:false
  }); 

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
componentWillMount(){
  console.log('[App.js] componentWillMount');
}



  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

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
  console.log('[App.js] rendering.......');
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
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          chnaged={this.nameChangeHandler}/>
          </div> 
      )
      style.backgroundColor = 'red';
  }

  const classes =[];

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