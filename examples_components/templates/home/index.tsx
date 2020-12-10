import React, { useEffect, useCallback } from "react";

// organisms
import { Container } from 'react-bootstrap'
import Head from '../../organisms/head'
import Header from '../../organisms/header'
import Hero from '../../organisms/hero'
import Advantage from '../../organisms/advantage'
import FoldImageText from '../../organisms/foldImageText'
import FoldCards from '../../organisms/foldCards'


type Props = {
    titlePage: string
    // logo
    urlLogo: string
    altLogo: string
    widthLogo?: string
    heightLogo?: string
    // hero
    urlHero: string
    altHero: string
    widthHero?: string
    heightHero?: string
    titleHero?: string
    subTitleHero?: string
    // Fold Image Text
    urlIconImageText: string
    altIconImageText: string
    widthIconImageText?: string
    heightIconImageText?: string
    titleImageText: string
    descriptionImageText: string
    // advantage
    titleAdvantage: string
    list: Record<string, any>
    // fold cards
    titleFoldCards: string
    listCards: Record<string, any>
}

const Home = ({
    titlePage,
    // logo
    urlLogo,
    altLogo,
    widthLogo = '',
    heightLogo = '',
    // hero
    urlHero,
    altHero,
    widthHero = '',
    heightHero = '',
    titleHero = '',
    subTitleHero = '',
    // Fold Image Text
    urlIconImageText,
    altIconImageText,
    widthIconImageText = '',
    heightIconImageText = '',
    titleImageText,
    descriptionImageText,
    // advantage
    titleAdvantage,
    list,
    // fold cards
    titleFoldCards = '',
    listCards,
}: Props) => {
    return (
        <>
            <Head titlePage={titlePage} />
            <Container fluid={true} className="m-0 p-0">
                <Header /> 
                <Hero 
                    urlHero={urlHero}
                    altHero={altHero}
                    widthHero={widthHero}
                    heightHero={heightHero}
                    titleHero={titleHero}
                    subTitleHero={subTitleHero}
                />
                <section className="py-5">
                    <FoldImageText 
                        urlIconImageText={urlIconImageText}
                        altIconImageText={altIconImageText}
                        widthIconImageText={widthIconImageText}
                        heightIconImageText={heightIconImageText}
                        titleImageText={titleImageText}
                        descriptionImageText={descriptionImageText}
                    />
                </section>
                <Advantage
                    className="bg-primary text-white py-5"
                    titleAdvantage={titleAdvantage}
                    list={list}
                />
                <section className="py-5">
                    <FoldCards
                        titleFoldCards={titleFoldCards}
                        listCards={listCards}
                    />
                </section>   
                <Advantage
                    className="bg-primary text-white py-5"
                    titleAdvantage={titleAdvantage}
                    list={list}
                /> 
                <section className="py-5">
                    <FoldImageText 
                        urlIconImageText={urlIconImageText}
                        altIconImageText={altIconImageText}
                        widthIconImageText={widthIconImageText}
                        heightIconImageText={heightIconImageText}
                        titleImageText={titleImageText}
                        descriptionImageText={descriptionImageText}
                    />
                </section>
            </Container>
        </>    
    )
}

export default Home
