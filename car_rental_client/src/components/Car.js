import React, { useState } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button'
import '../components/css/navbar.css';
import { useHistory, Link } from 'react-router-dom';
import LocalStorage from '../components/LocalStorage'
import { FcLike } from 'react-icons/fc'
export default function Car({ car }) {
    const history = useHistory();
    const { id, carName, model, price, pic, year } = car;
    const defaultImg = "https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463__340.png"
    return (
        <article className='cars-container'>
            <div className='img_container'>
                <img src={pic[0] || defaultImg} alt="car img" />
                <div className="price" >

                    <h2>{carName + " " + model}</h2>
                    <h3>Price : ${price}</h3>
                    <h3>Year : {year}</h3>

                    <Button variant="contained" size='small' onClick={() => {
                        let carID =  id;
                        console.log(id);
                        axios.post(`/cars/${carID}`)
                        // history.push(`/cars/${id}`)


                    }}><Link to={`/cars/${id}`} >More Details</Link></Button>
                    <FcLike />

                </div>
            </div>
        </article>
    )
}
