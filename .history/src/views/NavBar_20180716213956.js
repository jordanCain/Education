import React from 'react';
import pageIDs from '../constants/pageIDs';

class NavBar extends React.Component{
    render(){
        return(
        <div id="navBar">
        <ul>
            <div 
                onClick={() => { document.getElementById(pageIDs.about).scrollIntoView()}}>
                About
            </div>
            <div 
                onClick={() => { document.getElementById(pageIDs.projects).scrollIntoView()}}>
                Projects
            </div>
            <div 
                onClick={() => { document.getElementById(pageIDs.contact).scrollIntoView()}}>
                Contact
            </div>
            </ul>
        </div>
        );
    }
}

export default NavBar;