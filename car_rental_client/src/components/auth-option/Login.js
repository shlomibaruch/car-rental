
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input } from '@material-ui/core';
import '../css/navbar.css'
import UserCotext from '../../context/UserContext'
import FacebookAuth from './FacebookAuth';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const { setUserData } = useContext(UserCotext)

    const handelSubmit = async (e) => {
        e.preventDefault();
        const loginUser = { email, password };
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
        <div id='auth-container'>
            <h1>Hello login</h1>
            <form onSubmit={handelSubmit}>
                <Input id="outlined-basic" type='email' placeholder='Your Email Account' onChange={e => setEmail(e.target.value)} />
                <Input id="outlined-basic" type='password' placeholder='Your Password ' onChange={e => setPassword(e.target.value)} />
                <Input id="outlined-basic" type='submit' value='Login' placeholder='Your Password ' />

            </form>
            <FacebookAuth />
        </div>
    )
}
