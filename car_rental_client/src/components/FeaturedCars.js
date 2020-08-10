import React, { Component } from 'react';
import { CarContext } from '../context/context';
import Loading from './Loading';
import Title from '../components/template/Title'
import './css/navbar.css'
import Car from './Car';
export default class FeaturedCars extends Component {
    static contextType = CarContext;


    render() {

        let { loading, featuredCars: cars } = this.context;
        if (!cars) {

        } else {
            cars = cars.map(car => {
                return <Car key={car.id} car={car} />
            });

        }


        return (
            <section className="featured_cars">
                <div style={{ textAlign: 'center' }}>
                    <Title title="featured Cars" />
                </div>
                <div className='featured_room_center'>
                    {/* {cars} */}
                    {loading ? <Loading /> : cars}
                </div>

                {/* <Car/> */}

            </section >
        )
    }
}
