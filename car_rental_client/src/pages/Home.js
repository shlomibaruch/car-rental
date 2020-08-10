import React from 'react'
import Hero from '../components/Hero'
import Bunner from '../components/Bunner'
import '../components/navbar.css'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedCars from '../components/FeaturedCars'
export default function Home() {
    return (
        <>
            <Hero>
                <Bunner title="Helllllllllllllo" subtite="asdfasdgafgafhadhafh">

                    <Link to='/cars'>go to cars</Link>
                </Bunner>
            </Hero>
            <Services />
            <FeaturedCars />
        </>
    )
}
