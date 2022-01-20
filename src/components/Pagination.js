import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handelPrevious = () => {
        onPrevious();
    }
    const handelNext = () => {
        onNext();
    }
    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
            {
                prev ?
                <li className='page-item'>
                  <button className='page-link'onClick={handelPrevious}>Previous</button>  
                </li>
                : null
            }
            {
                next ?
                <li className='page-item'>
                    <button className='page-link'onClick={handelNext}>Next</button>
                </li>
                : null
            }
            </ul>
        </nav>
    )
}

export default Pagination