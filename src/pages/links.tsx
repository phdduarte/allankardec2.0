import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

// molecules
import Links from '../components/molecules/links'

import PageTemplate from '../components/templates/pageTemplate'
// css links
import AllLinksContainer from '../styles/pages/links'

const PageLinks: React.FC = () => {
    const listLinks = {
        childrenListLinks: [
            {
                link: {
                    label: '- AUTORES ESPÍRITAS CLÁSSICOS – BIBLIOTECA VIRTUAL',
                    url: 'http://www.autoresespiritasclassicos.com/'
                }
            },
            {
                link: {
                    label:
                        '- CSI IMAGENS E REGISTROS HISTÓRICOS DO ESPIRITISMO',
                    url: 'https://www.facebook.com/HistoriaDoEspiritismo/'
                }
            },
            {
                link: {
                    label: '- ECK – ESPIRITISMO COM KARDEC',
                    url:
                        'https://www.facebook.com/groups/Espiritismo.COM.Kardec/'
                }
            },
            {
                link: {
                    label: '- GEAE - GRUPO DE ESTUDOS AVANÇADOS ESPÍRITAS',
                    url: 'https://www.comkardec.net/'
                }
            },
            {
                link: {
                    label: '- GRUPO ESPÍRITA AMÉLIE BOUDET',
                    url: 'https://www.facebook.com/groups/189791881774515/'
                }
            },
            {
                link: {
                    label:
                        '- IPEAK – INSTITUTO DE PESQUISAS ESPÍRITAS ALLAN KARDEC',
                    url: 'http://www.ipeak.net/site/index.php'
                }
            },
            {
                link: {
                    label: '- JORNAL DE ESTUDOS ESPÍRITAS',
                    url: 'https://sites.google.com/site/jeespiritas/'
                }
            },
            {
                link: {
                    label: '- KARDECPEDIA',
                    url: 'https://kardecpedia.com/'
                }
            },
            {
                link: {
                    label: '- LIGA DE PESQUISADORES DO ESPIRITISMO',
                    url: 'http://www.lihpe.net/wordpress/'
                }
            },
            {
                link: {
                    label:
                        '- NUPES – NÚCLEO DE PESQUISA E ESPIRITUALIDADE EM SAÚDE',
                    url: 'https://www.ufjf.br/nupes/'
                }
            }
        ]
    }
    return (
        <PageTemplate titlePage="Links">
            <AllLinksContainer>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <h3>
                                LINKS DE INTERESSE PARA OS PESQUISADORES DE
                                ESPIRITISMO:
                            </h3>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col>
                            <Links listLinks={listLinks} />
                        </Col>
                    </Row>
                </Container>
            </AllLinksContainer>
        </PageTemplate>
    )
}

export default PageLinks
