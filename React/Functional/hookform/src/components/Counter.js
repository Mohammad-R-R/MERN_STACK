import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const[last,setLast]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const[con,setCon]=useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first,last, email, password ,con};
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <label>First name :</label>
            <input type="text" onChange={(e) =>setFirst(e.target.value)} /> <br/>

            <label>Last name</label>
            <input type="text" onChange={(e) => setLast(e.target.value)}/><br/>

            <label> Email:</label>
            <input type="email" onChange={(ram)=>setEmail(ram.target.value)}/><br/>

            <label>Password:</label>
            <input type="password" onChange={(lalaLand)=>setPassword(lalaLand.target.value)}/><br/>

            <label>Confirmation Password:</label>
            <input  type="password" onChange={(tocon) =>setCon(tocon.target.value)}/><br/>
            <button type="submit">damen bro</button>

           
        </form>
        <h1>Your form data</h1>
        <h1>**************************</h1>
        <h1>First Name:{first}</h1>
        <h1>Last Name:{last}</h1>
        <h1>Email:{email}</h1>
        <h1>Password:{password}</h1>
        <h2>Confirmation Password:{con}</h2>
</div>

    );
};
    
export default UserForm;
