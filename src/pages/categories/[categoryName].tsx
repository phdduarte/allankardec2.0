import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Title from '../../components/atoms/title'
import Grid from '../../components/organisms/grid'
import DocumentCard from '../../components/organisms/document-card'
import ReactPaginate from 'react-paginate'

// import { useDocumentPageCount } from '../../hooks/useDocumentPageCount'

import { DOCUMENT_TYPE, documentService, API_BASE_URL } from '../../services/document.service'
import Paginate from '../../components/organisms/paginate'

const prepareDocument = (document) => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Category = ({ documents, categoryName, currentPage, documentsCount}) => {
    // const pageCount = useDocumentPageCount({ type: category }, 12);
    const pages = documentsCount = Math.floor(documentsCount / 12) + 2
    
    return (
        <React.Fragment>            
            <PageTemplate titlePage={categoryName} mainModel="red-main">
                <Title label={categoryName} /> 
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
                    />
                </div>
            </PageTemplate>
        </React.Fragment>
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

    const category = categoryNameMap[categoryName]

    // const documents = await documentService.getDocuments({ type: category, page })
    
    const documentsCount = await documentService.getCount({ type: category })
    const documents = await documentService.getDocuments({ type: category, page })

    // const pageCount = useDocumentPageCount({ type: category }, 12)

    const currentPage = parseInt(page)

    return {
        documents,
        categoryName,
        category,
        currentPage,
        documentsCount
        // pageCount
    }
}

export default Category
