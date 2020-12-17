/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'

const Contacts: React.FC = () => {
    return (
        <div>
            <PageTemplate titlePage="CONTATOS" mainModel="red-main">
                <Title label="Contatos" />
                <div className="content-text">
                    <p>
                        Para sugestões e, em caso de dúvidas, entre em contato
                        conosco pelo email:<br />
                        <strong>allankardec.online@gmail.com</strong>
                    </p>
                    <p>
                        Nos encontre nas redes sociais
                    </p>
                    <div>
                        <a href="https://facebook.com/allankardec.online/" target="_blank"><img className="px-2" src="/assets/img/socialMedia/fb-2.png"/></a>
                        <a href="http://instagram.com/allankardec.online" target="_blank"><img className="px-2" src="/assets/img/socialMedia/insta-2.png"/></a>
                    </div>
                    
                </div>
            </PageTemplate>
        </div>
    )
}

export default Contacts
