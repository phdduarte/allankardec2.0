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
        <div className="Logo">
            <Row className="d-flex justify-content-center">
                <Image
                    src={urlLogo}
                    alt={altLogo}
                    width={width}
                    height={height}
                    layout="intrinsic"
                />
            </Row>
        </div>
    )
}

export default Header
