import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Cards from '../components/organisms/cards'

const Manuscript: React.FC = () => {
    const manuscriptList = {
        width: '',
        height: '',
        childrenListCardItems: [
            {
                cardItem: {
                    src: '/assets/img/type/journals.jpg',
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
                <Cards listCardItems={manuscriptList} />
            </PageTemplate>
        </div>
    )
}

export default Manuscript
