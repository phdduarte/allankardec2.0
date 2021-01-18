import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Cards from '../../components/organisms/cards'
import Title from '../../components/atoms/title'
import { DOCUMENT_TYPE, documentService } from '../../services/document.service'

const Category = ({ documents, category, categoryName }) => {
    const listCardItems = {
        className: 'col-6 col-lg-4',
        width: '480',
        height: '280',
        stdSrc: '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
        childrenListCardItems: documents

        // cardItem: {
        //     width: '300',
        //     src:
        //         '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
        //     height: '300',
        //     alt: 'teste',
        //     url: '/',
        //     id: '9**',
        //     documentTitle: 'Titulo do documento',
        //     description: 'loren ipsun loren ipsun',
        //     date: '12/12/20',
        //     pages: '9',
        //     download: ''
        // }
    }
    return (
        <div>
            <PageTemplate titlePage={categoryName} mainModel="red-main">
                <Title label={categoryName} />
                <Cards listCardItems={listCardItems} />
            </PageTemplate>
        </div>
    )
}

Category.getInitialProps = async ({ query }) => {
    const { categoryName } = query || {};

    const categoryNameMap = {
        manuscritos: DOCUMENT_TYPE.MANUSCRIPT,
        jornais: DOCUMENT_TYPE.NEWSPAPER,
        revistas: DOCUMENT_TYPE.MAGAZINE,
        cartas: DOCUMENT_TYPE.LETTER,
        livros: DOCUMENT_TYPE.BOOK,
        fotos: DOCUMENT_TYPE.PHOTO,
    }

    const category = categoryNameMap[categoryName];
    const documents = await documentService.getDocuments({ type: category })

    return {
        documents,
        categoryName,
        category
    }
}

export default Category
