import React, { useState } from "react";
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

type Props = {
    urlLogo?: string
    altLogo?: string
    widthLogo?: string
    heightLogo?: string
    session?: string
}

const Header = ({ urlLogo = '/assets/img/logos/logo.svg', altLogo = 'Logo', widthLogo = '210', heightLogo = '84', session = '' }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Navbar light expand="md" className="d-flex bd-highlight align-items-center">
                <NavbarBrand href="/" className="p-2 flex-grow-1 bd-highligh">
                    <Image
                        src={urlLogo}
                        alt={altLogo}
                        width={widthLogo}
                        height={heightLogo}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <div className="p-2 bd-highlight">
                    <Collapse isOpen={isOpen} navbar>
                        {!session && ( 
                            <Nav navbar>
                                <NavItem className="p-2">
                                    <NavLink className="h6 font-weight-normal text-primary text-uppercase" href="/cadastrar">Cadastrar</NavLink>
                                </NavItem>
                                <NavItem className="p-2">
                                    <NavLink className="h6 font-weight-normal text-primary text-uppercase" href="/login">Entrar</NavLink>
                                </NavItem>
                            </Nav>
                        )}
                        {session && ( 
                            <Nav navbar>
                                <NavItem className="p-2">
                                    <NavLink className="h6 font-weight-normal text-primary text-uppercase" href="/minha-conta">Olá, {session}</NavLink>
                                </NavItem>
                            </Nav>
                        )}
                    </Collapse>
                </div>    
            </Navbar>
        </Container>
    )
}

export default Header
