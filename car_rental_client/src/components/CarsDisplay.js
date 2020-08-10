// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import './navbar.css';
// import Pagination from './Pagination';
// const data = require('../data.json');

// export default function CarsDisplay() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [carsPerPage] = useState(6);
//     const history = useHistory()
//     const indexOfLastcCars = currentPage * carsPerPage;
//     const indexOfFirstCars = indexOfLastcCars - carsPerPage;
//     const currentCars = data.slice(indexOfFirstCars, indexOfLastcCars);

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber)
//     }
//     return (
//         <div>

//             <div className="cardContainer">
//                 {currentCars.map((item, index) => {

//                     return <div className='car_card' key={index}>
//                         <div className="car_data">
//                             <img src={item.pic[0]} />
//                             <div className='car_info'></div>
//                         <button onClick={()=>{history.push(`/cars/${item.id}`)}}>click</button>
//                         </div>
//                     </div>
//                 })};
//                 <Pagination
//                     carPerPage={carsPerPage}
//                     totalCars={data.length}
//                     paginate={paginate} />

//             </div>
//         </div>
//     )
// }
