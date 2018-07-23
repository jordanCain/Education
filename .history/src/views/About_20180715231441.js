import React from 'react';
import logo from '../logo.svg';
import pageIDs from '../constants/pageIDs';

class Page1 extends React.Component {
    render() {
        return(
            <div className="App" id={pageIDs.about}>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" onClick={() => {document.getElementById('page3').scrollIntoView() }}/>
                <h1 className="App-title">Welcome to React1</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React1</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React1</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default Page1;