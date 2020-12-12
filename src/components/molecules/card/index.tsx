import React from 'react'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    title?: string
    url: string
    width?: string
    height?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any
}

const Card = ({
    src,
    alt,
    url,
    title = '',
    height = '310',
    width = '230',
    children
}: Props) => (
    <div className="">
        <a href={url}>
            <div className="image-card">
                <Image src={src} alt={alt} width={width} height={height} />
            </div>
        </a>
        <div className="text-card">{title}</div>
        <div className="description-card">{children}</div>
    </div>
)

export default Card
