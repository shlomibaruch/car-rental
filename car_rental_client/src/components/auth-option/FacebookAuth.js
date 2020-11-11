import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';


export default function FacebookAuth() {
    // const [userToken] = useState();

    // const login = () => {
    //     console.log(userToken);
    // };
    const responseFacebook = (res) => {
        let resToken = res.accessToken;
        console.log(resToken);
       let resp = axios.post('http://localhost:3000/oauth/auth/facebook', {resToken})
            console.log(resp);

    };
        return (
            <div>
                <FacebookLogin
                    appId='697706900780728'
                    autoLoad={false}
                    fields="name,email,picture"
                    // onClick={login}
                    callback={responseFacebook}
                />
            </div>
        )
    
}
