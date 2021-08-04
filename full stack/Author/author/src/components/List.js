import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
const Las = props => {

  const { removeFromDom } = props;
  const deletePerson = (personId) => {
      axios.delete('http://localhost:8000/api/people/' + personId)
          .then(res => {
              removeFromDom(personId)
          })
  }
    return (
        <div>
            
            <h2>we have quotes by :</h2>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Author  </th>
      <th scope="col"> Action available</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
    {props.people.map((person, idx) => {
                return <p key={idx}>
                    {/* <Link to={"/" + person._id}>
                        {person.lastName}, {person.firstName}
                    </Link> */}
                    
                    {person.firstName}
                    |
                    <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>

                    <Link to={"/people/" + person._id + "/edit"}>
                            Edit
                    </Link>
                </p>
            })}
     
      
    </tr>
  </tbody>
</table>

            
        </div>
    )
}
export default Las ;