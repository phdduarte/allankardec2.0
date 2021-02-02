import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'
import DocumentCard from '../components/organisms/document-card'
import ReactPaginate from 'react-paginate'

import { useDocumentPageCount } from '../hooks/useDocumentPageCount'

import { DOCUMENT_TYPE, documentService, API_BASE_URL } from '../services/document.service'
import Paginate from '../components/organisms/paginate'

const prepareDocument = (document) => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Search = ({ documents, currentPage, title, documentsCount }) => {
    // const pageCount = useDocumentPageCount({ title_contains: title}, 12)
    const pages = Math.floor(documentsCount / 12) + 1
    const queryLocation = `title=${title}&`

    const pageTitle = `Pesquisando por '${title}'`
    
    return (
        <PageTemplate titlePage="Pesquisa" mainModel="red-main">

            <Title label={pageTitle} />
            <div className="row align-items-center">
                <Grid>
                    {documents.map(document => (
                        <div key={document.id} className="col-lg-4 col-md-6 align-center px-5">
                            <DocumentCard document={prepareDocument(document)}/>   
                        </div> 
                    ))}
                </Grid>
            </div>
            <div className="row align-items-center">
                <Paginate
                    currentPage={currentPage}
                    pages={pages}
                    queryLocation={queryLocation}
                />
            </div>
        </PageTemplate>
    )
}

Search.getInitialProps = async ({ query }) => {
    const { title, page } = query || {};

    const documentsCount = await documentService.getCount({ title_contains: title })
    const documents = await documentService.getDocuments({ title_contains: title, page })

    const currentPage = parseInt(page)

    return {
        documents,
        currentPage,
        title,
        documentsCount
    }
}

export default Search
