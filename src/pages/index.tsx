import React from 'react'

// import Card from '../components/molecules/card'
import Card from '../components/molecules/card'
import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'
import { documentService, API_BASE_URL } from '../services/document.service'

const listSliderImages = {
    childrenListSliderImages: [
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider1.jpg',
                alt: 'Imagem Slider 1',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        },
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider2.jpg',
                alt: 'Imagem Slider 2',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        },
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider3.jpg',
                alt: 'Imagem Slider 3',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        },
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider4.jpg',
                alt: 'Imagem Slider 4',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        },
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider5.jpg',
                alt: 'Imagem Slider 5',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        },
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider6.jpg',
                alt: 'Imagem Slider 6',
                text: 'AKOL - allankardec.online - Museu Online do Espiritismo'
            }
        }
    ]
}

const Home = ({ types }) => {
    return (
        <React.Fragment>
            <PageTemplate
                titlePage="ALLAN KARDEC Online"
                hero={true}
                listSliderImages={listSliderImages}
            >
                <Title label="O Museu" />
                <div className="row align-items-center">
                    <Grid>
                        {types.map((entry, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 mb-4 align-center"
                            >
                                <Card
                                    key={entry.label}
                                    src={`${API_BASE_URL}${
                                        entry.image.formats.small
                                            ? entry.image.formats.small.url
                                            : entry.image.url
                                    }`}
                                    alt={entry.label}
                                    url={`/categories/${entry.slug}`}
                                    target=""
                                    imgLabel={entry.label}
                                    title={entry.title}
                                />
                            </div>
                        ))}
                    </Grid>
                </div>
            </PageTemplate>
        </React.Fragment>
    )
}

Home.getInitialProps = async ({ query }) => {
    const documentTypes = await documentService.getDocumentTypes()

    return {
        types: documentTypes
    }
}

export default Home
