import React from 'react'
import { Container } from 'reactstrap'

const Header: React.FC = () => {
    return (
        <Container className="themed-container" fluid={true}>
            <h1>ReactJ</h1>
        </Container>
    )
}

export default Header
