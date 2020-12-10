import React from 'react'
import { Container } from 'react-bootstrap'
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
    width = '300px',
    height = '300px'
}: Props) => (
    <Container>
        <a href={url}>
            <div>
                <Image src={src} alt={alt} width={width} height={height} />
                <p>{label}</p>
            </div>
        </a>
    </Container>
)

export default Type
