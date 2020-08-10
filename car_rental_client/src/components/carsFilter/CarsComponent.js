import React from 'react'
import CarFilter from '../carsFilter/CarFilter';
import CarList from '../carsFilter/CarList';
import { CarConsumer } from '../../context/context';
import Loading from '../Loading';
export default function CarsComponent() {
    return (
        <CarConsumer>
            {/* -* render props *-  return the state from the context */}

            {
                // the value comming from the context
                (value) => {
                    const { sortsdCars, loading, cars } = value;
                    if (loading) {
                        return <Loading />;
                    };

                    return <div>
                        {/* <CarFilter cars={cars} /> */}
                        <CarList cars={sortsdCars}/>
                    </div>

                }
            }
        </CarConsumer>

    )
}
