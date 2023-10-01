import React from 'react'
import People from './People'

const PeopleList = ({ people, isLoading }) => {
    return (
        <div className='px-10 mt-1'>
            {isLoading ? <p>Loading...</p> :
                people?.map((item, index) => {
                    return <People key={index} people={item} />
                })
            }
        </div>
    )
}

export default PeopleList