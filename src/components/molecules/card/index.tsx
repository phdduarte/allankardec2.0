import React from 'react'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    imgLabel?: string
    url: string
    target: string
    width?: string
    height?: string
    layout?: any
    className?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any
}

const Card = ({
    src,
    alt,
    url,
    target,
    imgLabel = '',
    className = '',
    layout = 'intrinsic',
    height = '310',
    width = '230',
    children
}: Props) => (
    <div className={className}>
        <a href={url} target={target}>
            <div className="img-card">
                <Image
                    className="img-document-card"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout={layout}
                />
            </div>
        </a>
        <div className="img-text-card">{imgLabel}</div>
        <div className="description-card">{children}</div>
    </div>
)

export default Card
