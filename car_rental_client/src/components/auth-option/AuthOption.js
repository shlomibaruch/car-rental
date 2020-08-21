import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function AuthOptions() {

    const { userData } = useContext(UserContext);
    const history = useHistory()
    const register = () => history.push('/register');
    const login = () => history.push('/login');


    return (
        <nav>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>


                    <Button color="inherit" className='header-links' onClick={login}>Login</Button>


                    <Button color="inherit" className='header-links' onClick={register}>Rgister</Button>


                </Toolbar>
            </AppBar>

        </nav>
    )
}
