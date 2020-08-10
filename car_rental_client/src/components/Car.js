import React from 'react'
import '../components/navbar.css'
import { useHistory } from 'react-router-dom';
export default function Car({ car }) {
    const history = useHistory();
    const { id, carName, model, price, pic } = car;
    const defaultImg = "https://cdn.pixabay.com/photo/2013/07/13/11/36/volkswagen-158463__340.png"
    return (
        <article className='cars-container'>
            <div className='img_container'>
                <img src={pic[0] || defaultImg} alt="car img" />
                <div className="price" >

                    <h4>{carName + " " + model}</h4>
                    <h5>${price}</h5>

                    <button onClick={() => { history.push(`/cars/${id}`) }}>click</button>
                </div>
            </div>
        </article>
    )
}
