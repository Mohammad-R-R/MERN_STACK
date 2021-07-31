import React from 'react'
import axios from 'axios';
const Pro= props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}> title :{person.title}, description: {person.desc},Price : {person. price}</p>
            })}
        </div>
    )
}
export default Pro;