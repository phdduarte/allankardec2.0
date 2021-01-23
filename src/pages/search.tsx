import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'
import DocumentCard from '../components/organisms/document-card'
import ReactPaginate from 'react-paginate'

import { useDocumentPageCount } from '../hooks/useDocumentPageCount'

import {
    DOCUMENT_TYPE,
    documentService,
    API_BASE_URL
} from '../services/document.service'

const prepareDocument = document => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` }
})

const Search = ({ documents, page, title }) => {
    const pageCount = useDocumentPageCount({ title_contains: title }, 12)

    const handlePageChange = ({ selected }) => {
        if (selected === page) return

        const categoryUrl = process.browser
            ? window.location.href.split('?')[0]
            : ''
        window.location.href = `${categoryUrl}?title=${title}&page=${selected}`
    }

    const pageTitle = `Pesquisando por '${title}'`

    return (
        <div>
            <PageTemplate titlePage="Pesquisa" mainModel="red-main">
                <Title label={pageTitle} />
                <Grid>
                    {documents.map(document => (
                        <DocumentCard
                            key={document.id}
                            document={prepareDocument(document)}
                        />
                    ))}
                </Grid>
                <ReactPaginate
                    initialPage={page}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    previousLabel="Anterior"
                    nextLabel="Próximo"
                    breakLabel="..."
                    containerClassName={'pagination'}
                />
            </PageTemplate>
        </div>
    )
}

Search.getInitialProps = async ({ query }) => {
    const { title, page } = query || {}

    const documents = await documentService.getDocuments({
        title_contains: title
    })

    return {
        documents,
        page,
        title
    }
}

export default Search
