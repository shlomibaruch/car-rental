import React from 'react'
import '../components/css/navbar.css'
// import Title from '../components/template/Title'
export default function LandingPage() {
    return (
        <div className='landing-container'>

            {/* <div className='landing-auth'>
                adsf
            </div>
            <div className='landing-auth'>
                dsf
            </div> */}
            <video src={"https://player.vimeo.com/external/323496013.sd.mp4?s=934f61a0432ace6bcec62423e8a4282a4afb82ed&profile_id=164"} autoPlay loop muted />
           <h1 style={{color:'white'}}>Welcom to rental car</h1>
        </div>
    )
}
