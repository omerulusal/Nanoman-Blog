import React from 'react'
import './_pagination.scss'
const Pagination = () => {
    return (
        <div className='pagination'>
            <button className='Pbutton'>
                Previous
            </button>
            <button className='Pbutton'>
                Next
            </button>
        </div>
    )
}

export default Pagination