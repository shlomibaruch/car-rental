import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function Pagination({ carPerPage, totalCars, paginate }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalCars / carPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div style={{ textAlign: 'center' , margin: '20px'}}>
            {pageNumber.map((number) => {
                return <ButtonGroup onClick={() => paginate(number)} key={number} variant="text" color="primary" aria-label="text primary button group">
                    <Button variant="contained" color="primary" href="#contained-buttons" style={{margin:'5px'}}>
                        {number}
                    </Button>

                </ButtonGroup>

            })}

        </div>
    )
}
