import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/organisms/header'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'

// molecules
import Links from '../components/molecules/links'

const Home: React.FC = () => {
    const listLinks = {
        childrenListLinks: [
            {
                link: {
                    label: 'TESTE',
                    url: 'ALPHABET'
                }
            },
            {
                link: {
                    label: 'CORRO',
                    url: 'NETFLIX'
                }
            },
            {
                link: {
                    label: 'SBUB34',
                    url: 'STARBUCKS'
                }
            },
            {
                link: {
                    label: 'TSLA34',
                    url: 'TESLA INC'
                }
            },
            {
                link: {
                    label: 'AMZO34',
                    url: 'AMAZON'
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
        <div>
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
                />
            </Container>
            <Container>
                <Row>
                    <Links listLinks={listLinks} />
                </Row>
            </Container>
        </div>
    )
}

export default Home
