import React from 'react'

export default function Bunner({ children, title, subtite }) {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            <div></div>
            <p>{subtite}</p>
            {children}
        </div>
    )
}
