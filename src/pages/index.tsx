import React from 'react'

// import Card from '../components/molecules/card'
import Cards from '../components/organisms/cards'
import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'

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

    const listCardItems = {
        className: 'col-6 col-lg-4 cards',
        childrenListCardItems: [
            {
                cardItem: {
                    src: '/assets/img/type/books.jpg',
                    alt: 'Livros',
                    url: '/books',
                    imgLabel: 'Livros'
                }
            },
            {
                cardItem: {
                    src: '/assets/img/type/letters.jpg',
                    alt: 'Cartas',
                    url: '/letters',
                    imgLabel: 'Cartas',
                    className: 'col-6'
                }
            },
            {
                cardItem: {
                    src: '/assets/img/type/journals.jpg',
                    alt: 'Jornais',
                    url: '/journals',
                    imgLabel: 'Jornais'
                }
            },
            {
                cardItem: {
                    src: '/assets/img/type/manuscripts.jpg',
                    alt: 'Manuscritos',
                    url: '/manuscripts',
                    imgLabel: 'Manuscritos'
                }
            },
            {
                cardItem: {
                    src: '/assets/img/type/magazines.jpg',
                    alt: 'Revistas',
                    url: '/magazines',
                    imgLabel: 'Revistas'
                }
            },
            {
                cardItem: {
                    src: '/assets/img/type/csi.jpg',
                    alt: 'CSI Espirita',
                    url: '/fotos',
                    imgLabel: 'CSI Espirita'
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
                <Title label="O Museu" />
                <div className="align-items-center">
                    <Cards listCardItems={listCardItems} />
                    {/*
                    <Row>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/books.jpg"
                                alt="Livros"
                                url="/books"
                                imgLabel="Livros"
                            />
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/letters.jpg"
                                alt="Cartas"
                                url="/letters"
                                imgLabel="Cartas"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/journals.jpg"
                                alt="Jornais"
                                url="/journals"
                                imgLabel="Jornais"
                            />
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/manuscrito.jpg"
                                alt="Manuscritos"
                                url="/manuscript"
                                imgLabel="Manuscritos"
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/magazines.jpg"
                                alt="Revistas"
                                url="/magazines"
                                imgLabel="Revistas"
                            />
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <Card
                                src="/assets/img/type/csi.jpg"
                                alt="CSI Espirita"
                                url="/csi"
                                imgLabel="CSI do Espiritismo"
                            />
                        </div>
                    </Row>
                    */}
                </div>
            </PageTemplate>
        </div>
    )
}

export default Home
