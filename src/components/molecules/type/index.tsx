import React from 'react'
import TypeContainer from '../../../styles/components/type'

type Props = {
    src: string
    alt: string
    label: string
    url: string
}

const Type = ({ src, alt, url, label }: Props) => (
    <TypeContainer>

    <a href={url}>
        <img src={src} alt={alt} />
        {label}
    </a>
    </TypeContainer>
)

export default Type
