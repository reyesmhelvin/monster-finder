import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

      this.state = {
        monsters: [
          {
            name: 'tikbalang',
            id: '123'
          },
          {
            name: 'manananggal',
            id: '456'
          },
          {
            name: 'tiyanak',
            id: '789'
          }
        ]
    }
  }

  render() {
    return (
      <div className="App">
       {
         this.state.monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
       }
      </div>
    )
  }
}

export default App; 
