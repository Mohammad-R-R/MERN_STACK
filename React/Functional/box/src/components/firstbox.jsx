

import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
   
     
    return (
        
        <>
        {props.dam.map((box) => <div style={{background:box.color,width:"50px",height:"20px"}} ></div>)}
        </>
    )
};
    
export default MessageDisplay;