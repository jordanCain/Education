import React, { Component } from 'react';
import './App.css';
import NavBar from './views/NavBar';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<About />
				<Projects />
				<Contact />
			</div>
		);
	}
}

export default App;
