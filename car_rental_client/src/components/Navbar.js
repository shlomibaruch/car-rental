import React, { Component, useState } from 'react';
import '../components/navbar.css'
import { FaAlignRight } from 'react-icons/fa';
import { Link , useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

export default function Navbar() {
    const history = useHistory();
    // const [isOpen, setIsOpen ] = useState(false);

    // const handleNavToggel = () => {
    //     setIsOpen(!isOpen);
    //     console.log(isOpen);
    // };
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

    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <AppBar position="static"style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        {/* <FaAlignRight /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Car Rental
                </Typography>
                    <Button  color="inherit" onClick={()=>{history.push('/')}}>Home</Button>
                        <Button color="inherit" onClick={()=>{history.push('/cars')}}>Cars</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}
