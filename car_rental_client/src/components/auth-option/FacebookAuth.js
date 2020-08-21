import React from 'react'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
export default function FacebookAuth() {

    const login = async () => {
      
    }
    return (
        <div>
            {/* <button onClick={login}>facebook</button>
            <a href='/auth/facebook'>fffff</a> */}
            <div class="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
        </div>
    )
}
