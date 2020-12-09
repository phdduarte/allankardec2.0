import React from 'react'
import Head from 'next/head'

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
    children,
    hero = false,
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
            <>
                <section id="header">
                    <Header
                        urlLogo={urlLogo}
                        altLogo={altLogo}
                        width={widthLogo}
                        height={heightLogo}
                    />
                    {/* eslint-disable-next-line multiline-ternary */}
                    {hero ? (
                        <Slider listSliderImages={listSliderImages} />
                    ) : (
                        <></>
                    )}
                    <div id="search-bar">
                        <div className="col-12 col-md-8 col-xl-8">
                            <Search
                                placeholder="Digite aqui sua pesquisa"
                                buttonLabel="Pesquisar"
                            />
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                            <Link url="/jobs" label="Veja nosso acervo" />
                        </div>
                    </div>
                </section>
            </>
            <section>
                <main>{children}</main>
            </section>
            <section id="links">
                <div>
                    <Link
                        label="LINKS DE INTERESSE PARA PESQUISADORES E ESTUDIOSOS DO ESPIRITISMO"
                        url="/links"
                    />
                </div>
            </section>
            <section id="menu">
                <Menu listNavLinks={listNavLinks} />
            </section>
            <section id="footer">
                <Footer
                    text="©Copyright 2019 Allan Kardec.online / Designed by: "
                    linkText="PDWebdesign"
                    url="www.pdwebdesign.com.br"
                />
            </section>
        </>
    )
}

export default PageTemplate
