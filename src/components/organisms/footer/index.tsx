import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {
    text?: string
    linkText?: string
    url?: string
}

const Footer = ({ text, linkText, url }: Props) => {
    return (
        <Container fluid={true}>
            <p>{text}</p>
        </Container>
    )
}

export default Footer
