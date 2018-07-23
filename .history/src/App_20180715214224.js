import React, { Component } from 'react';
import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

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
