import React from 'react'

type Props = {
    src: string
    alt: string
    label: string
    url: string
}

const Type = ({ src, alt, url, label }: Props) => (
    <a href={url}>
        <div className="image-type">
            <img src={src} alt={alt} />
        </div>
        <div className="text-type">{label}</div>
    </a>
)

export default Type
