import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listSliderImages: Record<string, any>
}

const Slider = ({ listSliderImages }: Props) => (
    <div>
        <Carousel>
            {listSliderImages.childrenListSliderImages.map(
                (sliderImageItem, index) => (
                    <Carousel.Item
                        interval={sliderImageItem.sliderItem.interval}
                        key={index}
                    >
                        <img
                            className="d-block w-100"
                            src={sliderImageItem.sliderItem.src}
                            alt={sliderImageItem.sliderItem.alt}
                        />
                        <div className="align-items-center text-uppercase">
                            <Carousel.Caption>
                                <div className="caption-text">
                                    {sliderImageItem.sliderItem.text}
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                )
            )}
        </Carousel>
    </div>
)

export default Slider
