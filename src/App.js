import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
state = {
  todos:[
    {
      id:1,
      title:'Take the things from Publix',
      completed:false
    },
    {
      id:2, 
      title:'Take the things from Walmart',
      completed:false
    },
    {
      id:3,
      title:'Take the things from Target',
      completed:false
    },
  ]
}

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
