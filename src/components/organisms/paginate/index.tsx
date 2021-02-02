import React from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
    currentPage: number
    pages: number
}

const Paginate = ({ currentPage, pages }: Props) => {

    const handlePageChange = ({ selected }) => {
        if (selected === currentPage) return;

        const categoryUrl = process.browser ? window.location.href.split('?')[0] : '';
        window.location.href = `${categoryUrl}?page=${selected}`
        
    }

    return (
        <ReactPaginate 
            initialPage={currentPage} 
            pageCount={pages} 
            onPageChange={handlePageChange} 
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."

            marginPagesDisplayed={1}
            pageRangeDisplayed={3}

            containerClassName="d-flex"

            breakClassName="list-group-item"
            pageClassName="list-group-item"
            nextClassName="list-group-item"
            previousClassName="list-group-item"
            
            disabledClassName="list-group-item disabled"
            activeClassName="list-group-item active"
        />
    )
}

export default Paginate
