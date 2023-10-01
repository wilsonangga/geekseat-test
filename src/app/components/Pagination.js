import React from 'react'

const Pagination = ({ nextPage, prevPage, next, prev }) => {
    return (
        <div className="flex px-10 mt-5 gap-4">
            {prev && <p className='cursor-pointer text-sm text-blue-600 hover:font-medium' onClick={() => prevPage()}>&lt;&lt; Prev</p>}
            {next && <p className='cursor-pointer text-sm text-blue-600 hopver:font-medium' onClick={() => nextPage()}>Next &gt;&gt;</p>}
        </div>
    )
}

export default Pagination