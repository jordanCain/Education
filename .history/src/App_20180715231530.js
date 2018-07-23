import React, { Component } from 'react';
import './App.css';
import NavBar from './views/NavBar';
import Page1 from './views/About';
import Page2 from './views/Projects';
import Page3 from './views/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
			<NavBar />
			<Page1 />
			<Page2 />
			<Page3 />
			</div>
		);
	}
}

export default App;
