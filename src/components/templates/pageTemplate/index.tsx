import React from 'react'
import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'

import Link from '../../atoms/link'
import Header from '../../organisms/header'
import Slider from '../../molecules/slider'
import Search from '../../molecules/search'
import Menu from '../../molecules/menu'
import Footer from '../../organisms/footer'

type Props = {
    titlePage: string
    // logo
    urlLogo?: string
    altLogo?: string
    widthLogo?: string
    heightLogo?: string
    children: unknown
    mainModel?: string
    hero?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listSliderImages?: Record<string, any>
}

const PageTemplate = ({
    titlePage,
    urlLogo = '/assets/img/logos/logo.svg',
    altLogo = 'Logo Allan Kardec',
    widthLogo = '',
    heightLogo = '',
    mainModel = '',
    children,
    hero = false,
    listSliderImages
}: Props) => {
    const listNavLinks = {
        childrenListNavLinks: [
            {
                navLink: {
                    href: '/',
                    label: 'Home'
                }
            },
            {
                navLink: {
                    href: '/sobre',
                    label: 'Sobre'
                }
            },
            {
                navLink: {
                    href: '/contacts',
                    label: 'Contato'
                }
            },
            {
                navLink: {
                    href: '/glossario',
                    label: 'Glossário'
                }
            },
            {
                navLink: {
                    href: '/termsAndConditions',
                    label: 'Termos e Condições'
                }
            }
        ]
    }
    return (
        <>
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
            <div className="page">
                <header>
                    <a href="/" target="_self">
                        <Header
                            urlLogo={urlLogo}
                            altLogo={altLogo}
                            width={widthLogo}
                            height={heightLogo}
                        />
                    </a>
                    {/* eslint-disable-next-line multiline-ternary */}
                    {hero ? (
                        <Slider listSliderImages={listSliderImages} />
                    ) : (
                        <></>
                    )}
                    <div className="search-bar">
                        <Container>
                            <Row>
                                <div className="col-12 col-md-8 col-xl-8">
                                    <Search
                                        placeholder="Digite aqui sua pesquisa"
                                        buttonLabel="Pesquisar"
                                    />
                                </div>
                                <div className="col-12 col-md-4 col-xl-4 align-items-center">
                                    <Link
                                        url="/jobs"
                                        label="Veja nosso acervo"
                                    />
                                </div>
                            </Row>
                        </Container>
                    </div>
                </header>
            </div>
            <section>
                <main className={mainModel}>
                    <div className="content">{children}</div>
                </main>
            </section>
            <section className="link-linkPage">
                <div className="text-uppercase">
                    <Link
                        label="Links de interesse para pesquisadores e estudiosos do Espiritismo"
                        url="/links"
                    />
                </div>
            </section>
            <section className="menu text-uppercase">
                <Menu listNavLinks={listNavLinks} />
            </section>
            <footer>
                <Footer
                    text="©Copyright 2019 Allan Kardec.online / Designed by: "
                    linkText="PDWebdesign"
                    url="www.pdwebdesign.com.br"
                />
            </footer>
        </>
    )
}

export default PageTemplate
