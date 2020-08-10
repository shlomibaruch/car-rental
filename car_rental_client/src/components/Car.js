import React, { useState } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button'
import '../components/css/navbar.css';
import { useHistory, Link } from 'react-router-dom';
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

                    <h4>{carName + " " + model}</h4>
                    <h5>${price}</h5>
                    <h5>{year}</h5>

                    <Button variant="contained" size='small' onClick={() => {
                        let carID =  id;
                        console.log(id);
                        axios.post(`/cars/${carID}`)
                        // history.push(`/cars/${id}`)


                    }}><Link to={`/cars/${id}`} >More Details</Link></Button>

                </div>
            </div>
        </article>
    )
}
