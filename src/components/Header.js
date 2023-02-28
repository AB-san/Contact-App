import React from 'react';

// functional component -> this function right here (code just below)
const Header = () => {
    return(
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    );
}

export default Header;

//these div classnames used above come under the semantic-ui css that we have mentioned the link in index.html