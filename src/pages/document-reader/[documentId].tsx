import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Title from '../../components/atoms/title'
import PdfViewer from '../../components/organisms/pdf-viewer'

import { documentService, API_BASE_URL } from '../../services/document.service'


const DocumentReader = ({ document }) => {

    return (
        <div>
            <PageTemplate titlePage={document.title} mainModel="red-main">
                <Title label={document.title} />
                
                <PdfViewer fileUrl={`${API_BASE_URL}${document.file.url}`}/>
            </PageTemplate>
        </div>
    )
}

DocumentReader.getInitialProps = async ({ query }) => {
    const { documentId } = query || {};

    const document = await documentService.getDocument(documentId);

    return { document }
}

export default DocumentReader
