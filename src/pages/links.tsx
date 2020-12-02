import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Col, Container, Row, Button, Form } from 'react-bootstrap'

// molecules
import Links from '../components/molecules/links'

// organisms
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'

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
    const listNavLinks = {
        childrenListNavLinks: [
            {
                navLink: {
                    href: '#HOME',
                    label: 'HOME'
                }
            },
            {
                navLink: {
                    href: '#ABOUT',
                    label: 'ABOUT'
                }
            },
            {
                navLink: {
                    href: '#CONTACT',
                    label: 'CONTATO'
                }
            },
            {
                navLink: {
                    href: '#GLOSSARIO',
                    label: 'GLOSSARIO'
                }
            },
            {
                navLink: {
                    href: '#TERMS',
                    label: 'TERMOS E CONDICOES'
                }
            }
        ]
    }
    return (
        <Container>
            <Head>
                <meta charSet="utf-8" />
                <title>Links | AllanKardecOnline</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width,minimum-scale=1,initial-scale=1"
                />
            </Head>
            <Container>
                <Header
                    urlLogo="/assets/img/logos/logo.svg"
                    altLogo="Logo Allan Kardec"
                    listNavLinks={listNavLinks}
                    placeholder="Digite aqui sua pesquisa"
                    buttonLabel="Pesquisar"
                />
            </Container>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs="auto" className="my-1">
                        <h3>
                            LINKS DE INTERESSE PARA OS PESQUISADORES DE
                            ESPIRITISMO:
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="center">
                        <Links listLinks={listLinks} />
                    </Col>
                </Row>
            </Container>
            <section className="bg-black">
                <Footer text="©Copyright 2019 Allan Kardec.online / Designed by:" />
            </section>
        </Container>
    )
}

export default PageLinks
