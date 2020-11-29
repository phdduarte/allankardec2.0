import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import SliderContainer from '../../../styles/components/slider'

const Slider = () => (
    <>
        <SliderContainer>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider1.jpg" alt="Imagem Slider 1" />
                    <Carousel.Caption>
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider2.jpg" alt="Imagem Slider 2" />
                    <Carousel.Caption className="box-carousel-title">
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider3.jpg" alt="Imagem Slider 3" />
                    <Carousel.Caption>
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider4.jpg" alt="Imagem Slider 3" />
                    <Carousel.Caption>
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider5.jpg" alt="Imagem Slider 3" />
                    <Carousel.Caption>
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src="/assets/img/slider/slider6.jpg" alt="Imagem Slider 3" />
                    <Carousel.Caption>
                        <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </SliderContainer>
    </>
)

export default Slider
