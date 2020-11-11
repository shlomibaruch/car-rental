import React, { } from 'react';
import axios from 'axios'
// import Button from '@material-ui/core/Button'
// import '../components/css/navbar.css';
import { useHistory } from 'react-router-dom';
// // import LocalStorage from '../components/LocalStorage'
// import { FcLike } from 'react-icons/fc';
// import { Grid } from '@material-ui/core';
// // import AssignmentIcon from '@material-ui/icons/Assignment';

// export default function Car({ car }) {
//     const history = useHistory();
//     const { id, carName, model, price, pic, year } = car;
//     const defaultImg = "https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463__340.png"
//     return (
//         <Grid container>

//         </Grid>
//         // <article className='cars-container'>
//         //     <div className='img_container'>
//         //         <img src={pic[0] || defaultImg} alt="car img" />
//         //         <div className="price" >

//         //             <h2>{carName + " " + model}</h2>
//         //             <h3>Price : ${price}</h3>
//         //             <h3>Year : {year}</h3>
//         //             <Button variant="contained" size='small' onClick={() => {
//         //                 let carID = id;
//         //                 console.log(id);
//         //                 axios.post(`/cars/${carID}`)
//         //                 history.push(`/cars/${id}`)


//         //             }}>Details</Button>
//         //             <FcLike />

//         //         </div>
//         //     </div>
//         // </article>
//     )
// }

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // display:'flex',
        // justifyContent:'center',
        alignItems: 'center'

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'black',
    },
}));

export default function Car({ car }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();
    const { id, carName, model, price, pic, year, description } = car;
    const defaultImg = "https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463__340.png"
    const readMore = () => {
        axios.post(`/cars/${id}`)
        history.push(`/cars/${id}`)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(description.length);
    return (
        <Grid item style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>

            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            car
          </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={carName + " " + model}
                    subheader={year}
                />
                <CardMedia
                    className={classes.media}
                    image={pic[0] || defaultImg}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description.slice(0, 100)}... <Button onClick={readMore}>Read More</Button>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" style={{ color: 'red' }}>
                        <FavoriteIcon />
                    </IconButton>
                    {/* <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph> Price : {price}</Typography>


                    </CardContent>
                </Collapse>
            </Card>
        </Grid>

    );
}
