import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';

export default function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const history = useHistory();
    const { setUserData } = useContext(UserContext);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const newUser = { password, email };

            await axios.post("http://localhost:3000/users/register", newUser
            );
            const loginRes = await axios.post("http://localhost:3000/users/login", {
                email,
                password
            });
            console.log('loginRes', loginRes);

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push('/')
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label><input type="email" onChange={e => setEmail(e.target.value)} />
            <label>Password</label> <input type="password" onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Register" />

        </form>
    )
}
