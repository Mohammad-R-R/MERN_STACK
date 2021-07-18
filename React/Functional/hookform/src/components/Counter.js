import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const[last,setLast]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const[con,setCon]=useState("");
    const [titleError, setFirstNameError] = useState("");
    const [lastName, lastNameError] = useState("");
    const [Email, setEmailErorr] = useState("");
    const [Password2, setPasswordErorr] = useState("");
    const [ConPassword, setConPasswordErorr] = useState("");


    const handleTitle = (e) => {
        setFirst(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First Name must be 3 characters or longer!");
        }else
        setFirstNameError("");
    }


    const lasttitle = (e) => {
        setLast(e.target.value);
        if(e.target.value.length < 1) {
            lastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            lastNameError("Last Name must be 3 characters or longer!");
        }else
        lastNameError("");
    }


    const emailError = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailErorr("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailErorr("Email must be 5 characters or longer!");
        }else
        setEmailErorr("");
    }


    const pass_word = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordErorr("password is required!");
        } else if(e.target.value.length < 5) {
            setPasswordErorr("password must be 5 characters or longer!");
        }else
        setPasswordErorr("");
    }

    const Conpass_word = (e) => {
        setCon(e.target.value);
        if(setPassword !==setCon) {
            setConPasswordErorr("not match");
        } else
        setConPasswordErorr("");
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first,last, email, password ,con};
        console.log("Welcome", newUser);
       
    };


    
    return(
    <div>
        <form onSubmit={ (e)=>  e.preventDefault }>
    <div>
            <label>First name :</label>
            <input type="text" onChange={ handleTitle } /> <br/>
            {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
                        
    </div>

        <div>
            <label>Last name</label>
            <input type="text" onChange={lasttitle}/><br/>
             <p style={{color:'red'}}>{ lastName }</p> 
                    
                
         </div>


        <div>
            <label> Email:</label>
            <input type="email" onChange={emailError}/><br/>
            <p style={{color:'red'}}>{ Email }</p> 
        </div>

        <div>
            <label>Password:</label>
            <input type="password" onChange={pass_word}/><br/>
            <p style={{color:'red'}}>{ Password2 }</p> 

        </div>

        <div>
            <label>Confirmation Password:</label>
            <input  type="password" onChange={Conpass_word}/><br/>
            <p style={{color:'red'}}>{ ConPassword }</p> 
            
        </div>
        <button type="submit">Create</button>
           
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
