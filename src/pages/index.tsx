import React from 'react'

// import Card from '../components/molecules/card'
import Card from '../components/molecules/card'
import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Grid from '../components/organisms/grid'

const listSliderImages = {
    childrenListSliderImages: [
        {
            sliderItem: {
                interval: 1500,
                src: '/assets/img/slider/slider1.jpg',
                alt: 'Imagem Slider 1',
                text: 'allankardec.online - Museu Online do Espiritismo'
            },
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

const museumEntries = [
    {
        image: '/assets/img/type/books.jpg',
        alt: 'Livros',
        url: '/categories/livros',
        imageLabel: 'Livros'
    },
    {
        image: '/assets/img/type/letters.jpg',
        alt: 'Cartas',
        url: '/categories/cartas',
        imageLabel: 'Cartas'
    },
    {
        image: '/assets/img/type/journals.jpg',
        alt: 'Jornais',
        url: '/categories/jornais',
        imageLabel: 'Jornais'
    },
    {
        image: '/assets/img/type/manuscripts.jpg',
        alt: 'Manuscritos',
        url: '/categories/manuscritos',
        imageLabel: 'Manuscritos'
    },
    {
        image: '/assets/img/type/magazines.jpg',
        alt: 'Revistas',
        url: '/categories/revistas',
        imageLabel: 'Revistas'
    },
    {
        image: '/assets/img/type/csi.jpg',
        alt: 'CSI Espirita',
        url: '/categories/fotos',
        imageLabel: 'CSI do Espiritismo'
    }
]

const Home: React.FC = () => {

    return (
        <div>
            <PageTemplate
                titlePage="ALLAN KARDEC Online"
                hero={true}
                listSliderImages={listSliderImages}
            >
                <Title label="O Museu" />
                <div className="align-items-center">
                    
                    <Grid>
                        {museumEntries.map((entry) => (
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <Card
                                    key={entry.url}
                                    src={entry.image}
                                    alt={entry.alt}
                                    url={entry.url}
                                    imgLabel={entry.imageLabel}
                                />
                            </div>
                        ))}
                    </Grid>
                   
                </div>
            </PageTemplate>
        </div>
    )
}

export default Home
