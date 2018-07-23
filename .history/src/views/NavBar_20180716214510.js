import React from 'react';
import pageIDs from '../constants/pageIDs';

class NavBar extends React.Component{
    render(){
        return(
        <div>
            <span 
                className="menuItem"
                onClick={() => { document.getElementById(pageIDs.about).scrollIntoView()}}>
                About
            </span>
            <span 
                className="menuItem"
                onClick={() => { document.getElementById(pageIDs.projects).scrollIntoView()}}>
                Projects
            </span>
            <span
                className="menuItem" 
                onClick={() => { document.getElementById(pageIDs.contact).scrollIntoView()}}>
                Contact
            </span>
        </div>
        );
    }
}

export default NavBar;