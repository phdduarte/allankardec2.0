import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'
import DocumentCard from '../components/organisms/document-card'
import ReactPaginate from 'react-paginate'

import { useDocumentPageCount } from '../hooks/useDocumentPageCount'

import {documentService, API_BASE_URL } from '../services/document.service'

const prepareDocument = (document) => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Recents = ({ documents, page, category }) => {
    const pageCount = useDocumentPageCount({ type: category }, 12);

    const handlePageChange = ({ selected }) => {
        if (selected === page) return;

        const categoryUrl = process.browser ? window.location.href.split('?')[0] : '';
        window.location.href = `${categoryUrl}?page=${selected}`
        
    }
    
    return (
        <div>
            <PageTemplate titlePage="Últimos Documentos Adicionados" mainModel="red-main">
                <Title label="Documentos recentes" />
                
                <div className="row align-items-center">
                    <Grid>
                        {documents.map(document => (
                            <div key={document.index} className="col-lg-4 col-md-6 align-center px-5">
                                <DocumentCard
                                    key={`card-${document.id}`}
                                    document={prepareDocument(document)}
                                    href={`..${document.file.url}`}
                                />
                            </div>  
                        ))}
                    </Grid>
                </div>
                <div className="row align-items-center">

                    <ReactPaginate 
                        initialPage={page} 
                        pageCount={pageCount} 
                        onPageChange={handlePageChange} 
                        previousLabel="<<"
                        nextLabel=">>"
                        breakLabel="..."

                        marginPagesDisplayed={1}
                        pageRangeDisplayed={0}

                        containerClassName="d-flex"

                        breakClassName="list-group-item"
                        pageClassName="list-group-item"
                        nextClassName="list-group-item"
                        previousClassName="list-group-item"
                        
                        disabledClassName="list-group-item disabled"
                        activeClassName="active"
                    />
                </div>
            </PageTemplate>
        </div>
    )
}

Recents.getInitialProps = async ({ query }) => {
    const { page } = query || {};

    const documents = await documentService.getDocuments({ _sort: 'createdAt:DESC', page })

    return {
        documents,
        page
    }
}

export default Recents
