import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/organisms/header'
import Type from '../components/molecules/type'
import {
    Col,
    Container,
    Row,
    Button,
    FormControl,
    Form,
    InputGroup
} from 'react-bootstrap'
import AllTypeContainer from '../styles/components/type'
import Slider from '../components/molecules/slider'

const Home: React.FC = () => {
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
    const listSliderImages = {
        childrenListSliderImages: [
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider1.jpg',
                    alt: 'Imagem Slider 1',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider2.jpg',
                    alt: 'Imagem Slider 2',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider3.jpg',
                    alt: 'Imagem Slider 3',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider4.jpg',
                    alt: 'Imagem Slider 4',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider5.jpg',
                    alt: 'Imagem Slider 5',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider6.jpg',
                    alt: 'Imagem Slider 6',
                    text: 'ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO'
                }
            }
        ]
    }
    return (
        <div>
            <Head>
                <title>Homepage</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
            </Head>
            <Container>
                <Header
                    urlLogo="/assets/img/logos/logo.svg"
                    altLogo="Logo Allan Kardec"
                    listNavLinks={listNavLinks}
                    placeholder="Digite aqui sua pesquisa"
                    buttonLabel="Pesquisar"
                />
                <Slider listSliderImages={listSliderImages} />
            </Container>
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
        </div>
    )
}

export default Home
