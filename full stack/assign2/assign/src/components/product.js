import React, { useState } from 'react'
import axios from 'axios'


const Product = () => {
    //keep track of what is being typed via useState hook
    const [title, setFirstName] = useState(""); 
    const [price, setLastName] = useState(0);
    const [desc, setDesc] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product title</label><br/>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="number" onChange={(e)=>setLastName(e.target.value)} value={price}/>
            </p>

            <p>
                <label>descripition</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Product;
