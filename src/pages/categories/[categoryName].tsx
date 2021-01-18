import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Title from '../../components/atoms/title'
import Grid from '../../components/organisms/grid'
import DocumentCard from '../../components/organisms/document-card'
import ReactPaginate from 'react-paginate'

import { DOCUMENT_TYPE, documentService, API_BASE_URL } from '../../services/document.service'

const prepareDocument = (document) => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Category = ({ documents, categoryName, page }) => {

    const handlePageChange = ({ selected }) => {
        if (selected === page) return;

        const categoryUrl = process.browser ? window.location.href.split('?')[0] : '';
        window.location.href = `${categoryUrl}?page=${selected}`
        
    }
    
    return (
        <div>
            <PageTemplate titlePage={categoryName} mainModel="red-main">
                <Title label={categoryName} />
                <Grid>
                    {documents.map(document => (
                        <DocumentCard key={document.id} document={prepareDocument(document)}/>   
                    ))}
                </Grid>
                <ReactPaginate 
                    initialPage={page} 
                    pageCount={3} 
                    onPageChange={handlePageChange} 
                    previousLabel="Anterior"
                    nextLabel="Próximo"
                    breakLabel="..." />
            </PageTemplate>
        </div>
    )
}

Category.getInitialProps = async ({ query }) => {
    const { categoryName, page } = query || {};

    const categoryNameMap = {
        manuscritos: DOCUMENT_TYPE.MANUSCRIPT,
        jornais: DOCUMENT_TYPE.NEWSPAPER,
        revistas: DOCUMENT_TYPE.MAGAZINE,
        cartas: DOCUMENT_TYPE.LETTER,
        livros: DOCUMENT_TYPE.BOOK,
        fotos: DOCUMENT_TYPE.PHOTO,
        csi: DOCUMENT_TYPE.CSI
    }

    const category = categoryNameMap[categoryName];
    const documents = await documentService.getDocuments({ type: category, page })

    return {
        documents,
        categoryName,
        category,
        page
    }
}

export default Category
