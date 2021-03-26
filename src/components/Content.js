import React from 'react';


function Content({children}) {
    return (
        <div id="content">
            {children}
            <h1> test</h1>
        </div>
    )
}

export default Content;