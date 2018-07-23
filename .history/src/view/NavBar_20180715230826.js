import React from 'react';

class NavBar extends React.Component{
    render(){
        <div>
            <div 
                onClick={() => { document.getElementById('page3').scrollIntoView()}}>About</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
    }
}