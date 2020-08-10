import React from 'react'
import Hero from '../components/Hero';
import Bunner from '../components/Bunner';
import '../components/navbar.css';
import CarsDisplay from '../components/CarsDisplay';
import Title from '../components/Title';

export default function Cars() {
    return (
        <div className='car_container'>
            <Hero hero="carHero">
                <Bunner title='We have the best cars' subtite="Serch your dream car">
                    <input type='text' placeholder='Search' />
                </Bunner>


            </Hero>
        < div/>
        <div style={{textAlign: 'center'}}>
        <Title title="All The Cars" />
        </div>
        <CarsDisplay/>
    
        </div>
    )
}
