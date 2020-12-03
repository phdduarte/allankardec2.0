import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import Search from '../search'

type Props = {
    placeholder: string
    buttonLabel: string
    listNavLinks: Record<string, any>
}

const Menu = ({ listNavLinks, placeholder, buttonLabel }: Props) => (
    <div>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {listNavLinks.childrenListNavLinks.map(
                        (navLinkItem, index) => (
                            // eslint-disable-next-line prettier/prettier
                            <Nav.Link href={navLinkItem.navLink.href} key={index}>
                                {navLinkItem.navLink.label}
                            </Nav.Link>
                        )
                    )}
                </Nav>
                <Search placeholder={placeholder} buttonLabel={buttonLabel} />
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Menu
