import React from 'react'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
export default function FacebookAuth() {

    const login = async () => {
        // const access_token = "EAAJ6j4v6drgBAGRdwZC4IXTITfZBhwZBbx6hW5JZAb80desjvZAFAdkKZCSpuVJ92jwHyPLE99k8d5XEyZBxz902YtMcA28ZAfoyfKBkZBwZCdXd0V4ZCMvfCwGL27UX7O9K6Da47Q1hXggekpEgeW9PKso9UU8fBkc5Ci4F6tguUTMwKZCf9CPsNZAMD"
        // await axios.get('http://localhost:3000/oauth/auth/facebook', { access_token })
    }
    return (
        <div>
            <button onClick={login}>facebook</button>
            <a href='/oauth/auth/facebook'>ffaacc</a>
        </div>
    )
}
