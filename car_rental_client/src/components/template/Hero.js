import React from 'react'
import '../css/navbar.css';

export default function Hero({ children, hero }) {
    return (
        <header className={hero} >{ children }</header>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero',
}