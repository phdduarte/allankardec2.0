/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'

const Contacts: React.FC = () => {
    return (
        <div>
            <PageTemplate titlePage="CONTATOS" mainModel="red-main">
                <Title label="CONTATOS" />
                <div className="content-text">
                    <p>
                        Para sugestões e, em caso de dúvidas, entre em contato
                        conosco pelo email:<br />
                        <strong>allankardec.online@gmail.com</strong>
                    </p>
                </div>
            </PageTemplate>
        </div>
    )
}

export default Contacts
