import React from 'react';
import pageIDs from '../constants/pageIDs';

class NavBar extends React.Component{
    render(){
        return(
        <div>
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
        </div>
        );
    }
}

export default NavBar;