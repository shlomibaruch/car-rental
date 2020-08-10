import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function Pagination({ carPerPage, totalCars, paginate }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalCars / carPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div>
            {pageNumber.map((number) => {
                return <ButtonGroup onClick={() => paginate(number)} key={number} variant="text" color="primary" aria-label="text primary button group">
                    <Button>{number}</Button>

                </ButtonGroup>

            })}
        </div>
    )
}
