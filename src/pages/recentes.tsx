import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'
import DocumentCard from '../components/organisms/document-card'

// import { useDocumentPageCount } from '../hooks/useDocumentPageCount'

import {documentService, API_BASE_URL } from '../services/document.service'
import Paginate from '../components/organisms/paginate'

const prepareDocument = (document) => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Recents = ({ documents, currentPage, documentsCount }) => {
    // const pageCount = useDocumentPageCount({ type: category }, 12);
    // const pages = Math.floor(documentsCount / 12) + 2
    
    return (
        <PageTemplate titlePage="Últimos Documentos Adicionados" mainModel="red-main">
            <Title label="Documentos recentes" />
            
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
                    documentsCount={documentsCount}
                />
            </div>
        </PageTemplate>
    )
}

Recents.getInitialProps = async ({ query }) => {

    const { page } = query || {}
    const currentPage = parseInt(page)
    
    const documents = await documentService.getDocuments({ _sort: 'createdAt:DESC', page })    
    const documentsCount = await documentService.getCount()

    return {
        documents,
        currentPage,
        documentsCount
    }
}

export default Recents
