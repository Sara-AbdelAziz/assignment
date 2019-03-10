import React, { Component } from 'react';
import Categories  from './Categories';
import '../styles/App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className=" m-tb-20">
          <Categories />
        </div>
      </div>
    );
  }
}

export default App;
