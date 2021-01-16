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
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider2.jpg',
                    alt: 'Imagem Slider 2',
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider3.jpg',
                    alt: 'Imagem Slider 3',
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider4.jpg',
                    alt: 'Imagem Slider 4',
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider5.jpg',
                    alt: 'Imagem Slider 5',
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            },
            {
                sliderItem: {
                    interval: 1500,
                    src: '/assets/img/slider/slider6.jpg',
                    alt: 'Imagem Slider 6',
                    text: 'allankardec.online - Museu Online do Espiritismo'
                }
            }
        ]
    }

    const listCardItems = {
        className: 'col-12 col-sm-6 col-lg-4 cards',
        stdSrc: '/assets/img/type/books.jpg',
        childrenListCardItems: [
            {
                cover: {
                    alternativeText: 'Livros',
                    url: '/categories/livros',
                    caption: 'Livros'
                },
                src: '/assets/img/type/books.jpg'
            },
            {
                cover: {
                    alternativeText: 'Cartas',
                    url: '/categories/cartas',
                    caption: 'Cartas'
                },
                src: '/assets/img/type/letters.jpg'
            },
            {
                cover: {
                    alternativeText: 'Jornais',
                    url: '/categories/jornais',
                    caption: 'Jornais'
                },
                src: '/assets/img/type/journals.jpg'
            },
            {
                cover: {
                    alternativeText: 'Manuscritos',
                    url: '/categories/manuscritos',
                    caption: 'Manuscritos'
                },
                src: '/assets/img/type/manuscripts.jpg'
            },
            {
                cover: {
                    alternativeText: 'Revistas',
                    url: '/categories/revistas',
                    caption: 'Revistas'
                },
                src: '/assets/img/type/magazines.jpg'
            },
            {
                cover: {
                    alternativeText: 'CSI Espirita',
                    url: '/categories/csi',
                    caption: 'CSI Espirita'
                },
                src: '/assets/img/type/csi.jpg'
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
