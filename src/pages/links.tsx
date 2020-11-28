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
            <Header
                urlLogo="/assets/img/logos/logo.svg"
                altLogo="Logo Allan Kardec"
            />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col sm={8} className="my-1">
                                <Form.Label
                                    htmlFor="inlineFormInputName"
                                    srOnly
                                >
                                    Nome
                                </Form.Label>
                                <Form.Control
                                    id="inlineFormInputName"
                                    placeholder="Digite aqui sua pesquisa"
                                />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Enviar</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Links listLinks={listLinks} />
                </Row>
            </Container>
        </Container>
    )
}

export default Home
