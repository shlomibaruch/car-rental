import React, { Component } from 'react';
import axios from 'axios';
const carsData = require('../data.json');
const CarContext = React.createContext();

class CarProvider extends Component {
    state = {
        cars: [],
        sortsdCars: [],
        FeaturedCars: [],
        loading: true,
        carName: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
        year: 0

    };

    getData = async () => {
        const res = await axios.get('/cars');
        let response = res.data.cars;
        // console.log(response);
        let cars = this.formatData(response);
        let featuredCars = cars.filter(car => car.featured === true)

        // maxPrice find the max price from the resulte ...
        let maxPrice = Math.max(...cars.map(item => item.price));

        this.setState({
            loading: false,
            featuredCars,
            cars,
            sortsdCars: cars,
            price: maxPrice,
            maxPrice
        })
    } 
    // get data 

    componentDidMount() {
        this.getData()

    };


    formatData(items) {
        let tempItems = items.map(item => {
            // let id = item.id;
            let img = item.pic.map(image => image);

            let car = { ...item, img };
            return car;
        });
        return tempItems
    };
    getCar = (id) => {
        // function that find the car by ID 
        let tempCar = [...this.state.cars];
        const car = tempCar.find(car => car.id === id);
        return car

    }
    handleChange = e => {
        // const target = e.target
        const name = e.target.name;
        const value = e.target.value;
        console.log([name]);
        this.setState({
            // [name] - check the name propty and compares it to State //
            [name]: value,
        },
            this.filterCars  // Here I call the filter function to filter the cars by value //
        );

    };

    filterCars = () => {
        let { cars, price, carName, year } = this.state;
        let tepmCar = [...cars];

        // filter by car name //
        if (carName !== 'all') {
            tepmCar = tepmCar.filter(car => car.carName === carName);
        };

        // filter by car year //
        if (year !== 1) {
            tepmCar = tepmCar.filter(car => car.year >= year);
        };

        // filter by car price //
        tepmCar = tepmCar.filter(car => car.price >= price);

        this.setState({
            sortsdCars: tepmCar
        });
    };

    render() {
        return (
            <CarContext.Provider value={{
                ...this.state,
                getCar: this.getCar,
                handleChange: this.handleChange

            }}>
                {this.props.children}
            </CarContext.Provider>
        )
    }
}

const CarConsumer = CarContext.Consumer;
export { CarProvider, CarConsumer, CarContext }