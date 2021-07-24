import react, { useState } from 'react';
    
    
const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }
 
    return props.movies.map( (item) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}


    
export default MyComponent;