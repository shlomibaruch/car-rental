import React from 'react'
import Hero from '../components/Hero'
import Bunner from '../components/template/Title'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
            <Hero hero="errorCarHero"> 
                <Bunner title="404" subtite="return home">
                    <Link to='/'>Home</Link>
                </Bunner>
            </Hero>
    )
}
