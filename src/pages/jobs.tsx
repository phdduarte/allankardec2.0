import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
// import { documentService } from '../services/document.service'
// import Counter from '../components/organisms/counter/counter'

const Jobs = props => {
    const documents = props.documents

    // let sumCollectionPages = 0
    // documents.map(d => {
    //     sumCollectionPages += d.pageCount
    // })

    return (
        <div>
            <PageTemplate titlePage="JOBS" mainModel="red-main">
                <Title label="Jobs" />
                <div className="content-text">
                    {/* <Counter
                        startNumber={sumCollectionPages - 200}
                        endNumber={sumCollectionPages}
                        duration={500}
                    /> */}

                    <p>
                        <strong>PÁGINAS NO ACERVO</strong>
                    </p>
                    <p>
                        O nosso museu digital se encontra constantemente sendo
                        atualizado com novos documentos de interesse para o
                        Espiritismo. Verifique sempre as nossas atualizações com
                        novas fontes primárias que propiciam material de
                        subsídio para pesquisas e estudos sobre a Doutrina
                        Espírita.
                    </p>
                </div>
            </PageTemplate>
        </div>
    )
}

// Jobs.getInitialProps = async () => {
//     const documents = await documentService.getDocuments({ _limit: -1 })
//     return { documents }
// }

export default Jobs
