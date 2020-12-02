import React from 'react'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Menu from '../../molecules/menu'

type Props = {
    urlLogo: string
    altLogo: string
    width?: string
    height?: string
    listNavLinks: Record<string, any>
    placeholder: string
    buttonLabel: string
}

const Header = ({
    urlLogo,
    altLogo,
    width = '',
    height = '',
    placeholder,
    buttonLabel,
    listNavLinks
}: Props) => {
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
            <Menu
                listNavLinks={listNavLinks}
                placeholder={placeholder}
                buttonLabel={buttonLabel}
            />
        </Container>
    )
}

export default Header
