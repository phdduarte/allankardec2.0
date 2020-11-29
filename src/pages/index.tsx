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
            
        </Container>
    )
}

export default Home
