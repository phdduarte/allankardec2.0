import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

// molecules
import Links from '../components/molecules/links'

import PageTemplate from '../components/templates/pageTemplate'

const PageLinks: React.FC = () => {
    const listLinks = {
        childrenListLinks: [
            {
                link: {
                    label: 'Autores Espíritas Clássicos - Biblioteca Virtual',
                    url: 'http://www.autoresespiritasclassicos.com/'
                }
            },
            {
                link: {
                    label: 'CSI Imagens e Registros Históricos do Espiritismo',
                    url: 'https://www.facebook.com/HistoriaDoEspiritismo/'
                }
            },
            {
                link: {
                    label: 'ECK – Espiritismo com Kardec',
                    url:
                        'https://www.facebook.com/groups/Espiritismo.COM.Kardec/'
                }
            },
            {
                link: {
                    label: 'GEAE - Grupo de Estudos Avançados Espíritas',
                    url: 'https://www.comkardec.net/'
                }
            },
            {
                link: {
                    label: 'Grupo Espírita Amélie Boudet',
                    url: 'https://www.facebook.com/groups/189791881774515/'
                }
            },
            {
                link: {
                    label:
                        'IPEAK – Instituto de Pesquisas Espíritas Allan Kardec',
                    url: 'http://www.ipeak.net/site/index.php'
                }
            },
            {
                link: {
                    label: 'Jornal de Estudos Espíritas',
                    url: 'https://sites.google.com/site/jeespiritas/'
                }
            },
            {
                link: {
                    label: 'Kardecpedia',
                    url: 'https://kardecpedia.com/'
                }
            },
            {
                link: {
                    label: 'Liga de Pesquisadores do Espiritismo',
                    url: 'http://www.lihpe.net/wordpress/'
                }
            },
            {
                link: {
                    label:
                        'NUPES – Núcleo de Pesquisa e Espiritualidade em Saúde',
                    url: 'https://www.ufjf.br/nupes/'
                }
            },
            {
                link: {
                    label:
                        'Projeto Allan Kardec - Universidade Federal de Juiz de Fora',
                    url: 'https://projetokardec.ufjf.br'
                }
            }
        ]
    }
    return (
        <div className="page-link">
            <PageTemplate titlePage="Links" mainModel="red-main">
                <Container className="py-4">
                    <Row className="text-center">
                        <Col>
                            <h1>
                                Links de Interesse para os Pesquisadores de
                                Espiritismo:
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="list-links">
                                <Links listLinks={listLinks} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </PageTemplate>
        </div>
    )
}

export default PageLinks
