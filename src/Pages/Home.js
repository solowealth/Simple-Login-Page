import React from 'react';
import { useState } from 'react';

const Home = () => {

    const [userName, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);

    const HandleSubmit = () => {
        setShow(true);
        console.log(userName, password, email)
    };

    const setLoginDetails = (detail, top) => {
        setShow(false); 
        if (top === "username") setUserName(detail);
        if (top === "password") setPassword(detail);
        if (top === "email") setEmail(detail);
    }

    return(
        <div>
            <h1>This is the Original Home page.</h1>
            <h1>Click to Login</h1> <br/>

            {show && 
                <div>
                    <h1>Display Result:</h1>
                    <h3>{userName}</h3>
                    <h3>{password}</h3>
                    <h3>{email}</h3>
                </div>
            }

            <div>
                <input type="text" placeholder="Enter Username" onChange={(e) => setLoginDetails(e.target.value, "username")} /> <br/><br/>
                <input type="password" placeholder="Enter Password" onChange={(e) => setLoginDetails(e.target.value, "password")}/><br/><br/>
                <input type="email" placeholder="Enter Email" onChange={(e) => setLoginDetails(e.target.value, "email")} /> <br/><br/>
                <button onClick={HandleSubmit} >SUBMIT</button>
            </div>
        </div>
    )
}

export default Home;