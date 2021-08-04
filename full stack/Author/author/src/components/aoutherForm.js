import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Aouther = (props) => {

    return (
       
        <div>
           
            <div>
            <h1>Favorite authors</h1>
            <Link to = "/dashboard">Add an authors</Link>
            </div>
       

            </div>
        
    )
}
export default Aouther;