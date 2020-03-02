import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = ({
    persons:[
          { name:'Kumar', age:28 },
          { name:'Kiran', age:29 },
          { name:'Lenin', age:22 }
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
  const doesShow = this.StaticRange.showPersons;
  this.setState({showPersons: !doesShow})

}

nameChangeHandler = (event) => {
  this.setState({
        persons:[
          { name:'Raja Kumar', age:89 },
          { name: event.target.value, age:29 },
          { name:'Lenin Smith', age:45 }
        ]
      });
}

render(){

  const style = {
    backgroundColor:'white',
    font:'inherit',
    border:'1x solid blue',
    padding: '8px',
    cursor:'pointer'
  };

  return (
    <div className="App">
        <h1>REACT</h1>
        <p>This is working...!!!</p>
        <button style={style} onClick={() => this.togglePersonsHandler}>Switch Prop</button>
        
          <div>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                />
            <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Kranthi Rajaram..!!')} 
                changed={this.nameChangeHandler}
                > My Hobbies are:</Person>
            <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
          </div>
    </div>
  );
}
}

export default App;