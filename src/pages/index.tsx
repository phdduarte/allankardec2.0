import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/templates/header'
import { Col, Container, Row, Button, FormControl, Form, InputGroup } from 'react-bootstrap'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Homepage</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
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
                                    Name
                                </Form.Label>
                                <Form.Control
                                    id="inlineFormInputName"
                                    placeholder="Digite sua pesquisa"
                                />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </Container>
        </Container>
    )
}

export default Home
