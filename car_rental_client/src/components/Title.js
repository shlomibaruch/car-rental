import React from 'react'
import '../components/navbar.css';
export default function Title({title}) {
    return (
        <div className='section_title'>
            <h2>{title}</h2>
            <div></div>
        </div>
    )
}
