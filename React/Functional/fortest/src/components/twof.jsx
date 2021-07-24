import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.mes }</pre>
        </>
    );
};
    
export default MessageDisplay;
