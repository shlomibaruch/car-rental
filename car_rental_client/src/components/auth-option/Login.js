
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserCotext from '../../context/UserContext'
import FacebookAuth from './FacebookAuth';

export default function Login() {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const history = useHistory();
    const { setUserData } = useContext(UserCotext)

     const handelSubmit = async (e) => {
        e.preventDefault();
        const loginUser = { email , password};
        const loginRes = await axios.post(
            "http://localhost:3000/users/login",
            loginUser
        );
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push('/')

     }
    return (
        <div id='login-container'>
            <h1>Hello login</h1>
            <form onSubmit={handelSubmit}>
            <input type='email' placeholder='Your Email Account' onChange={e => setEmail(e.target.value)}/>
            <input type='password' placeholder='Your Password ' onChange={e => setPassword(e.target.value)}/>
            <input type='submit' value='Login' placeholder='Your Password '/>
            
            </form>
            <FacebookAuth />
        </div>
    )
}
