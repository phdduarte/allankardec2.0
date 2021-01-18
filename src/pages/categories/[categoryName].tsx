import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Title from '../../components/atoms/title'
import Grid from '../../components/organisms/grid'
import DocumentCard from '../../components/organisms/document-card'

import { DOCUMENT_TYPE, documentService, API_BASE_URL } from '../../services/document.service'

const Category = ({ documents, category, categoryName }) => {
    return (
        <div>
            <PageTemplate titlePage={categoryName} mainModel="red-main">
                <Title label={categoryName} />
                <Grid>
                    {documents.map(document => (
                        <DocumentCard key={document.id} document={{ ...document, cover: { url: `${API_BASE_URL}${document.cover.url}` } }}/>   
                    ))}
                </Grid>
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
    }

    const category = categoryNameMap[categoryName];
    const documents = await documentService.getDocuments({ type: category, page })

    return {
        documents,
        categoryName,
        category
    }
}

export default Category
