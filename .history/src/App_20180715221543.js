import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router';
import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/page1' component={Page1} 
            onEnter={function(){
                document.getElementById("page1").scrollIntoView();
                }
            }
          />
        <Route path='/page2' component={Page2} 
            onEnter={function(){
                document.getElementById("page2").scrollIntoView();
                }
            }
        />
        <Route path='/page3' component={Page3} 
            onEnter={function(){
                document.getElementById("page3").scrollIntoView();
                }
            }
        />
      </BrowserRouter>
    );
  }
}

export default App;
