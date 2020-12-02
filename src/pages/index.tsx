import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/organisms/header'
import {
    Col,
    Container,
    Row,
    Button,
    FormControl,
    Form,
    InputGroup
} from 'react-bootstrap'

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <meta charSet="utf-8" />
                <title>HOME | AllanKardecOnline</title>
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
                <AllTypeContainer>
                    <Type
                        src="/assets/img/type/books.jpg"
                        alt="Livros"
                        url="#books"
                        label="Livros"
                    />
                    <Type
                        src="/assets/img/type/letters.jpg"
                        alt="Cartas"
                        url="#letters"
                        label="Cartas"
                    />
                    <Type
                        src="/assets/img/type/journals.jpg"
                        alt="Jornais"
                        url="#journals"
                        label="Jornais"
                    />
                    <Type
                        src="/assets/img/type/manuscrito.jpg"
                        alt="Manuscritos"
                        url="#manuscript"
                        label="Manuscritos"
                    />
                    <Type
                        src="/assets/img/type/magazines.jpg"
                        alt="Revistas"
                        url="#magazines"
                        label="Revistas"
                    />
                    <Type
                        src="/assets/img/type/csi.jpg"
                        alt="CSI Espirita"
                        url="#csi"
                        label="CSI do Espiritismo"
                    />
                </AllTypeContainer>
            </Container>
        </Container>
    )
}

export default Home
