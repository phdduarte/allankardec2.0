import React from 'react'

type Props = {
    src: string
    alt: string
    label: string
    url: string
}

const Type = ({ src, alt, url, label }: Props) => (
    <div className="type">
        <a href={url}>
            <img src={src} alt={alt} />
            {label}
        </a>
    </div>
)

export default Type
