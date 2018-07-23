import React, { Component } from 'react';
import './App.css';
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    );
  }
}

export default App;
