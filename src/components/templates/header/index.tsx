import React from 'react'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Menu from '../../molecules/menu'

type Props = {
    urlLogo: string
    altLogo: string
    width?: string
    height?: string
}

const Header = ({ urlLogo, altLogo, width = '', height = '' }: Props) => {
    return (
        <Container fluid={true}>
            <Row className="d-flex justify-content-center">
                <Image
                    src={urlLogo}
                    alt={altLogo}
                    width={width}
                    height={height}
                />
            </Row>
            <Menu />
        </Container>
    )
}

export default Header
