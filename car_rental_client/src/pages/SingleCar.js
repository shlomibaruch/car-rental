import React, { Component } from 'react'
import Hero from '../components/Hero';
import Bunner from '../components/Bunner';
 import {CarContext} from '../context/context'
import { Link } from 'react-router-dom';
export default class SingleCar extends Component {
    
    static contextType = CarContext; 
    constructor(props) {
        super(props)
        console.log(this.props);

        this.state = { 
            carID: this.props.match.params.search_car
        }
    };
    componentDidMount() { 

    }
    render() {
        const {getCar} = this.context;
        const car = getCar(this.state.carID)
        console.log(car);

        if(!car) {
            return <div className="error">
                <h1>ERROR</h1>
                <Link to="/cars">
                    Go To Cars
                </Link>
            </div>
        };
        const {carName,model,price,year,featured,pic } = this.context;
        return (
            <div>
                Singel
            </div>
        )
    }
}
