import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Cards from '../components/organisms/cards'
import Title from '../components/atoms/title'
import { documentService } from '../services/document.service'

const Journals: React.FC = () => {
    const listCardItems = {
        className: 'col-6 col-lg-4',
        width: '480',
        height: '280',
        childrenListCardItems: [
            {
                cardItem: {
                    width: '300',
                    src:
                        '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9',
                    download: ''
                }
            },
            {
                cardItem: {
                    width: '300',
                    src:
                        '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9',
                    download: ''
                }
            },
            {
                cardItem: {
                    width: '300',
                    src:
                        '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9',
                    download: ''
                }
            },
            {
                cardItem: {
                    width: '300',
                    src:
                        '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9',
                    download: ''
                }
            },
            {
                cardItem: {
                    width: '300',
                    src:
                        '/assets/img/uploads/12147886445f16d2afb14295.01782621.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9',
                    download: ''
                }
            }
        ]
    }
    return (
        <div>
            <PageTemplate titlePage="Jornais" mainModel="red-main">
                <Title label="Jornais" />
                <Cards listCardItems={listCardItems} />
            </PageTemplate>
        </div>
    )
}

export default Journals


export async function getServerSideProps(context) {
    const newspapers = await documentService.getNewspapers({ page: context.query.page });

    return {
        props: { newspapers }
    }
}
