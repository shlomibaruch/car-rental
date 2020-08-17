import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext'
export default function AuthOptions() {

    const { userData } = useContext(UserContext);
    const history = useHistory()
    const register = () => history.push('/register');
    const login = () => history.push('/login');


    return (
        <nav className='header'>
            {
                userData.user ? (
                    <>

                    </>
                ) : (<>
                    <div className='authButton'>
                        <button className='header-links' onClick={login}>Login</button>
                    </div>

                    <div className='authButton'>
                        <button className='header-links' onClick={register}>Rgister</button>
                    </div>
                </>
                    )
            }



        </nav>
    )
}
