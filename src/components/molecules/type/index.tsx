import React from 'react'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    label: string
    url: string
    width?: string
    height?: string
}

const Type = ({
    src,
    alt,
    url,
    label,
    height = '310',
    width = '230'
}: Props) => (
    <a href={url}>
        <div className="image-type">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
        <div className="text-type">{label}</div>
    </a>
)

export default Type
