import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Cards from '../components/organisms/cards'
import Title from '../components/atoms/title'

const Manuscript: React.FC = () => {
    const listCardItems = {
        className: 'col-6 col-lg-4',
        childrenListCardItems: [
            {
                cardItem: {
                    width: '300',
                    src: '/assets/img/type/journals.jpg',
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
                    src: '/assets/img/type/journals.jpg',
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
            <PageTemplate titlePage="Manuscritos">
                <Title label="Manuscritos" />
                <Cards listCardItems={listCardItems} />
            </PageTemplate>
        </div>
    )
}

export default Manuscript
