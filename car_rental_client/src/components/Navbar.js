import React, { useContext } from 'react';
import '../components/css/navbar.css'
// import { FaAlignRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AuthOptions from './auth-option/AuthOption'
// import MenuIcon from '@material-ui/core/Menu';
import UserContext from '../context/UserContext'

export default function Navbar() {
    const { userData,setUserData } = useContext(UserContext)
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(0.1),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
        history.push('/')
    };
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        {/* <FaAlignRight /> */}
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Car Rental
                </Typography>
                    {
                        userData.user ? <>

                            <Button color="inherit" onClick={() => { history.push('/') }}>Home</Button>
                            <Button color="inherit" onClick={() => { history.push('/cars') }}>Cars</Button>
                            <Button color="secondary" className='header-links' onClick={logout} >Logout</Button>
                        </> :
                            <AuthOptions />
                    }
                </Toolbar>
            </AppBar>
        </nav>
    )
}
