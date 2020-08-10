import React, { Component } from 'react';
const carsData = require('../data.json');
const CarContext = React.createContext();

class CarProvider extends Component {
    state = {
        cars: [],
        sortsdCars: [],
        FeaturedCars: [],
        loading: true
    };

    // get data 

    componentDidMount() {
        let cars = this.formatData(carsData)
        let featuredCars = cars.filter(car => car.featured === true)
        this.setState({ loading: false, featuredCars, cars, sortsdCars:cars })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.id;
            let img = item.pic.map(image => image) ;

            let car = { ...item, img };
            return car;
        });
        return tempItems
    };

    getCar = (id) => {
        let tempCar = [...this.state.cars];
        const car = tempCar.find(car => car.id === id);
        return car

    }

    render() {
        return (
            <CarContext.Provider value={{ ...this.state, getCar: this.getCar}}>
                {this.props.children}
            </CarContext.Provider>
        )
    }
}

const CarConsumer = CarContext.Consumer;
export { CarProvider, CarConsumer, CarContext }