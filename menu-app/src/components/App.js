import React, { Component } from 'react';
import Categories  from './Categories';
import '../styles/App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Categories />
      </div>
    );
  }
}

export default App;
