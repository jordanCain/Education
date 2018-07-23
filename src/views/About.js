import React from 'react';
import pageIDs from '../constants/pageIDs';

class Page1 extends React.Component {
    render() {
        return(
            <div className="App" id={pageIDs.about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tincidunt nisi at porttitor. Phasellus at auctor tellus. Duis placerat rhoncus diam vitae sodales. Nulla tempus interdum placerat. Sed sit amet purus fermentum, suscipit nisi at, scelerisque dolor. Vestibulum ut lacinia leo, efficitur feugiat purus. Cras et magna ultrices, lobortis libero vel, ornare enim. Phasellus dignissim, nunc non porta semper, metus sapien feugiat urna, in vehicula sem quam at ligula. Maecenas fermentum, lorem eget facilisis commodo, diam ex lobortis diam, quis sodales ligula lectus et lorem. Aliquam velit massa, vulputate nec urna in, sagittis pretium elit. Morbi quam enim, commodo non leo sed, aliquam tempor nisl. Nulla gravida ex sit amet tellus congue, in porttitor massa faucibus.
            </div>
        )
    }
}

export default Page1;