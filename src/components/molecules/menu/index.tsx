import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

type Props = {
    listNavLinks: Record<string, any>
}

const Menu = ({ listNavLinks }: Props) => (
    <div>
        <Navbar>
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
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Menu
