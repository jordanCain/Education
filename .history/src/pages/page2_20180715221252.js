import React from 'react';
import logo from '../logo.svg';

class Page2 extends React.Component {
    render() {
        return(
            <div className="App" id="page2">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React2</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default Page2;