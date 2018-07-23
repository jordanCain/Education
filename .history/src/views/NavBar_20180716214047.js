import React from 'react';
import pageIDs from '../constants/pageIDs';

class NavBar extends React.Component{
    render(){
        return(
        <div id="navBar">
            <ul>
                <li 
                    onClick={() => { document.getElementById(pageIDs.about).scrollIntoView()}}>
                    About
                </li>
                <li 
                    onClick={() => { document.getElementById(pageIDs.projects).scrollIntoView()}}>
                    Projects
                </li>
                <li 
                    onClick={() => { document.getElementById(pageIDs.contact).scrollIntoView()}}>
                    Contact
                </li>
            </ul>
        </div>
        );
    }
}

export default NavBar;