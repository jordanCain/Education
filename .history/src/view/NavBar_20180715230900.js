import React from 'react';
import pageIDs from '../../Constants/pageIDs';

class NavBar extends React.Component{
    render(){
        <div>
            <div 
                onClick={() => { document.getElementById('page3').scrollIntoView()}}>
                About
            </div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
    }
}