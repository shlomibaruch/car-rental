import React, { Component } from 'react';
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

    // get data 

    componentDidMount() {
        let cars = this.formatData(carsData);
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
        this.setState({
            [name]: value,
        },
            this.filterCars
        );

    };

    filterCars = () => {
        let { cars, price, carName, year} = this.state;
        let tepmCar = [...cars];
        if(carName !== 'all') {
            tepmCar = tepmCar.filter(car => car.carName === carName)
        }
        if(year !== 1) {
            tepmCar = tepmCar.filter(car => car.year >= year)
        }
        // if(price >= minPrice) {/
            tepmCar = tepmCar.filter(car => car.price >= price)
        // }
        this.setState({
            sortsdCars: tepmCar
        })
    }

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