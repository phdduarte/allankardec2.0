import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/templates/header'
import { Col, Container, Row, Button } from 'reactstrap'

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
            <Header />
            <Row>
                <Col>.col-6</Col>
                <Col>.col-6</Col>
            </Row>
            <Container className="themed-container">.container</Container>
            <div className="container">
                <div className="row">
                    <div className="col-sm">One of three columns</div>
                    <div className="col-sm">One of three columns</div>
                    <div className="col-sm">One of three columns</div>
                </div>
            </div>
            <Button color="danger">Danger!</Button>
        </Container>
    )
}

export default Home
