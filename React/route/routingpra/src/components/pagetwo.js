import React from 'react';

const Home = props => {
    console.log(props);
    if (props.id==null) {
        return (
            <div>
                <h2>Welcome</h2>
            </div>
        );
    } if (isNaN(props.id)) {
        return (
            <div>
                 
                <p style={props.core? { color: props.core, backgroundColor: props.due } :null
                
                }>
                   <h1>the word is: {props.id}</h1> 
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>the number is: {props.id}</p>
            </div>
        );
    };
}

export default Home;