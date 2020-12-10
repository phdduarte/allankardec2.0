import React, { useState } from 'react';
import Image from 'next/image'

type Props = {
    titleHero?: string
    subTitleHero?: string
    urlHero?: string
    altHero?: string
    widthHero?: string
    heightHero?: string
}

const Hero = ({ 
    titleHero = '',
    subTitleHero = '',
    urlHero = '',
    altHero = '',
    widthHero = '100%',
    heightHero = '75vh'
}: Props) => {
    const heroImage = {
        backgroundImage: `url(${urlHero})`,
        height: '75vh',
        width: '100%',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const heroText = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    return (
        <div>
            { urlHero && (
                    <div className="d-none d-md-block">
                        <div className="position-relative bg-primary" style={heroImage}>
                            <div className="position-absolute text-center text-white" style={heroText}>
                                <h1 className="h3">{titleHero}</h1>
                                <h2>{subTitleHero}</h2>
                            </div>
                        </div>   
                    </div>
                )
            }
            { !urlHero && (
                    <div className="bg-primary">
                        <div className="container">
                            <div className="text-white py-5">
                                <h1 className="h3">{titleHero}</h1>
                                <h2 className="h5 font-weight-normal">{subTitleHero}</h2>
                            </div>
                        </div>   
                    </div>
                )
            }
        </div>
    )
}

export default Hero
