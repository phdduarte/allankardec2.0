import React from 'react'

import PageTemplate from '../../components/templates/pageTemplate'
import Cards from '../../components/organisms/cards'
import Title from '../../components/atoms/title'

import { getDocuments, getDocumentsByCategory } from '../../actions/index'

const Category = (props) => {
    const documents = props.documents
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
            <PageTemplate titlePage={props.category} mainModel="red-main">
                <Title label={props.category} />
                <Cards listCardItems={listCardItems} />
            </PageTemplate>
        </div>
    )
}

Category.getInitialProps = async ({ query }) => {

    let category = query.category

    let idCategory
    switch (category) {
        case "manuscritos":
            idCategory = 0;
            break;
        case "csi":
            idCategory = 2;
            category = "CSI do Espiritismo";
            break;
        case "jornais":
            idCategory = 3;
            break;
        case "livros":
            idCategory = 4;
            break;
        case "revistas":
            idCategory = 5;
            break;
        default:
            idCategory = 99;
            break;
        
    }

    const documents = await getDocumentsByCategory(idCategory)
    return {
        documents,
        category
    }
}

export default Category
