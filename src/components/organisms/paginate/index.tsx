import React from 'react'
import ReactPaginate from 'react-paginate'

type Props = {
    currentPage: number
    documentsCount: number
    queryLocation?: string
}

const Paginate = ({ currentPage, documentsCount, queryLocation }: Props) => {

    const location = queryLocation || ''

    let pages

    documentsCount <= 12 ?
        pages = 1 :
        pages = Math.floor(documentsCount / 12) + 2

    const handlePageChange = ({ selected }) => {
        if (selected === currentPage) return;
        const categoryUrl = process.browser ? window.location.href.split('?')[0] : '';
        window.location.href = `${categoryUrl}?${location}page=${selected}`
    }

    return (
        <ReactPaginate 
            initialPage={currentPage} 
            pageCount={pages} 
            onPageChange={handlePageChange} 
            previousLabel="⏴"
            nextLabel="⏵"
            breakLabel="..."

            marginPagesDisplayed={1}
            pageRangeDisplayed={3}

            containerClassName="d-flex"

            breakClassName="list-unstyled mt-3 px-1"
            pageClassName="list-unstyled mt-3 px-1"
            nextClassName="list-group-item px-2"
            previousClassName="list-group-item px-2"
            
            disabledClassName="list-group-item disabled"
            activeClassName="font-weight-bold active"
        />
    )
}

export default Paginate
