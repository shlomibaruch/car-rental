import React, { useState } from 'react'
import Car from '../Car';
import '../css/navbar.css';
import Pagination from '../Pagination';

export default function CarList({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(9);
    const indexOfLastcCars = currentPage * carsPerPage;
    const indexOfFirstCars = indexOfLastcCars - carsPerPage;
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
        <>
            <div className="cardContainer">

                {currentCars.map((item) => {

                    return <Car key={item.id} car={item} />

                })}
            </div>
            <Pagination
                carPerPage={carsPerPage}
                totalCars={cars.length}
                paginate={paginate} />
        </>

    )

}
