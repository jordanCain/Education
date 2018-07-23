import React from 'react';
import pageIDs from '../constants/pageIDs';

class Page2 extends React.Component {
    render() {
        return(
            <div className="App" id={pageIDs.projects}>
                <header className="App-header">
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