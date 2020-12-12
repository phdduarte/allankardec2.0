import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Cards from '../components/organisms/cards'
import Title from '../components/atoms/title'

const Manuscript: React.FC = () => {
    const listCardItems = {
        childrenListCardItems: [
            {
                cardItem: {
                    width: '300',
                    src: '/assets/img/type/journals.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    cardTitle: '',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9'
                }
            },
            {
                cardItem: {
                    width: '300',
                    src: '/assets/img/type/journals.jpg',
                    height: '300',
                    alt: 'teste',
                    url: '/',
                    cardTitle: '',
                    id: '9**',
                    documentTitle: 'Titulo do documento',
                    description: 'loren ipsun loren ipsun',
                    date: '12/12/20',
                    pages: '9'
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
