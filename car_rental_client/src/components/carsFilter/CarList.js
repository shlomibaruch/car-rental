import React, { useState } from 'react'
import Car from '../Car';
import '../navbar.css';
import { useHistory } from 'react-router-dom'
import Pagination from '../Pagination';

export default function CarList({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);
    const history = useHistory()
    const indexOfLastcCars = currentPage * carsPerPage;
    const indexOfFirstCars = indexOfLastcCars - carsPerPage ;
    const currentCars = cars.slice(indexOfFirstCars, indexOfLastcCars);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    if (cars.length === 0) {
        return <div className='empty-search'>
            <h1>There is no match for your search</h1>
        </div>
    }
    return (
        <div className="cardContainer">

            {currentCars.map((item) => {

                return <Car key={item.id} car={item} />

            })}
            <Pagination
                carPerPage={carsPerPage}
                totalCars={cars.length}
                paginate={paginate} />
        </div>

    )
    //     <div className="cardContainer">
    //     {currentCars.map((item, index) => {

    //         return <div className='car_card' key={index}>
    //             <div className="car_data">
    //                 <img src={item.pic[0]} />
    //                 <div className='car_info'></div>
    //                 <button onClick={() => { history.push(`/cars/${item.id}`) }}>click</button>
    //             </div>
    //         </div>
    //     })};
    //     <Pagination
    //         carPerPage={carsPerPage}
    //         totalCars={cars.length}
    //         paginate={paginate} />

    // </div>
}
