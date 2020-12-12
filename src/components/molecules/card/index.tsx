import React from 'react'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    imgLabel?: string
    url: string
    width?: string
    height?: string
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any
}

const Card = ({
    src,
    alt,
    url,
    imgLabel = '',
    className = '',
    height = '310',
    width = '230',
    children
}: Props) => (
    <div className={className}>
        <a href={url}>
            <div className="img-card">
                <Image src={src} alt={alt} width={width} height={height} />
            </div>
        </a>
        <div className="img-text-card">{imgLabel}</div>
        <div className="description-card">{children}</div>
    </div>
)

export default Card
