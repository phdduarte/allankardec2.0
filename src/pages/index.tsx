import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Type from '../components/molecules/type'
import { AllTypeContainer, TypeContainer } from '../styles/pages/index'
import PageTemplate from '../components/templates/pageTemplate'

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
                <AllTypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/books.jpg"
                            alt="Livros"
                            url="#books"
                            label="Livros"
                        />
                    </TypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/letters.jpg"
                            alt="Cartas"
                            url="#letters"
                            label="Cartas"
                        />
                    </TypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/journals.jpg"
                            alt="Jornais"
                            url="#journals"
                            label="Jornais"
                        />
                    </TypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/manuscrito.jpg"
                            alt="Manuscritos"
                            url="#manuscript"
                            label="Manuscritos"
                        />
                    </TypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/magazines.jpg"
                            alt="Revistas"
                            url="#magazines"
                            label="Revistas"
                        />
                    </TypeContainer>
                    <TypeContainer>
                        <Type
                            src="/assets/img/type/csi.jpg"
                            alt="CSI Espirita"
                            url="#csi"
                            label="CSI do Espiritismo"
                        />
                    </TypeContainer>
                </AllTypeContainer>
            </PageTemplate>
        </div>
    )
}

export default Home
