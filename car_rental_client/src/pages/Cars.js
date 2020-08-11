import React,{useContext} from 'react'
import Hero from '../components/template/Hero';
import Bunner from '../components/template/Bunner';
import '../components/css/navbar.css';
// import CarsDisplay from '../components/CarsDisplay';
import {CarContext} from '../context/context'
import CarsFilter from '../components/carsFilter/CarFilter'
import Title from '../components/template/Title';
import CarsComponent from '../components/carsFilter/CarsComponent';
export default function Cars() {
    const context = useContext(CarContext);
    const { cars } = context;

    return (
        <div className='car_container'>
            <Hero hero="carHero">
                <Bunner title='We have the best cars' subtite="Maybe your dream car is here">
                    <CarsFilter cars={cars}/>
                </Bunner>


            </Hero>
        < div/>
        <div style={{textAlign: 'center'}}>
        <Title title="All The Cars" />
        </div>

        <CarsComponent />
    
        </div>
    )
}
