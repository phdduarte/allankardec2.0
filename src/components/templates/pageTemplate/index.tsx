import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '../../organisms/header'
import Slider from '../../molecules/slider'

type Props = {
    titlePage: string
    // logo
    urlLogo: string
    altLogo: string
    widthLogo?: string
    heightLogo?: string
    children: unknown
    hero?: boolean
    listSliderImages?: Record<string, any>
}

const PageTemplate = ({
    titlePage,
    urlLogo,
    altLogo,
    widthLogo,
    heightLogo,
    children,
    hero=false,
    listSliderImages
}: Props) => {
    const listNavLinks = {
        childrenListNavLinks: [
            {
                navLink: {
                    href: '/',
                    label: 'HOME'
                }
            },
            {
                navLink: {
                    href: '/about',
                    label: 'ABOUT'
                }
            },
            {
                navLink: {
                    href: '/contact',
                    label: 'CONTATO'
                }
            },
            {
                navLink: {
                    href: '/glossary',
                    label: 'GLOSSARIO'
                }
            },
            {
                navLink: {
                    href: '/termsAndConditions',
                    label: 'TERMOS E CONDIÇÕES'
                }
            }
        ]
    }
    return (
        <Container fluid={true}>
            <Head>
                <meta charSet="utf-8" />
                <title>{titlePage}</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width,minimum-scale=1,initial-scale=1"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <Container>
                <Header
                    urlLogo={urlLogo}
                    altLogo={altLogo}
                    width={widthLogo}
                    height={heightLogo}
                    listNavLinks={listNavLinks}
                />
                {hero ? <Slider listSliderImages={listSliderImages} /> : <></>}
            </Container>
            {children}
        </Container>
    )
}

export default PageTemplate
