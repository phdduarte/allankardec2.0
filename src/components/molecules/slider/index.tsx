import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

type Props = {
    listSliderImages: Record<string, any>
}

const Slider = ({ listSliderImages }: Props) => (
    <>
        <div>
            <Carousel>
                {listSliderImages.childrenListSliderImages.map((sliderImageItem, index) => (
                    <Carousel.Item
                        interval={sliderImageItem.sliderItem.interval}
                        key={index}
                    >
                        <img 
                            className="d-block w-100"
                            src={sliderImageItem.sliderItem.src}
                            alt={sliderImageItem.sliderItem.alt}
                        />
                        <Carousel.Caption>
                            <span>{sliderImageItem.sliderItem.text}</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </>
)

export default Slider
