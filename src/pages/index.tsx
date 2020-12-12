import React from 'react'

import Card from '../components/molecules/card'
import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import { Container, Row } from 'react-bootstrap'

import HomeContainer from '../styles/pages/home'

const Home: React.FC = () => {
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
            <PageTemplate
                titlePage="HomePage"
                urlLogo="/assets/img/logos/logo.svg"
                altLogo="Logo Allan Kardec"
                heightLogo=""
                widthLogo=""
                hero={true}
                listSliderImages={listSliderImages}
            >
                <HomeContainer>
                    <Container>
                        <Title label="O Museu" />

                        <Row>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/books.jpg"
                                    alt="Livros"
                                    url="/books"
                                    title="Livros"
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/letters.jpg"
                                    alt="Cartas"
                                    url="/letters"
                                    title="Cartas"
                                />
                            </div>
                        </Row>
                        <Row>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/journals.jpg"
                                    alt="Jornais"
                                    url="/journals"
                                    title="Jornais"
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/manuscrito.jpg"
                                    alt="Manuscritos"
                                    url="/manuscript"
                                    title="Manuscritos"
                                />
                            </div>
                        </Row>
                        <Row>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/magazines.jpg"
                                    alt="Revistas"
                                    url="/magazines"
                                    title="Revistas"
                                />
                            </div>
                            <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <Card
                                    src="/assets/img/type/csi.jpg"
                                    alt="CSI Espirita"
                                    url="/csi"
                                    title="CSI do Espiritismo"
                                />
                            </div>
                        </Row>
                    </Container>
                </HomeContainer>
            </PageTemplate>
        </div>
    )
}

export default Home
