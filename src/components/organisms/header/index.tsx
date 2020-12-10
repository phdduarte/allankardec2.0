import React from 'react'
import Image from 'next/image'
import { Row } from 'react-bootstrap'

type Props = {
    urlLogo: string
    altLogo: string
    width?: string
    height?: string
}

const Header = ({ urlLogo, altLogo, width = '', height = '' }: Props) => {
    return (
        <>
            <Row className="d-flex justify-content-center">
                <Image
                    src={urlLogo}
                    alt={altLogo}
                    width={width}
                    height={height}
                />
            </Row>
        </>
    )
}

export default Header
