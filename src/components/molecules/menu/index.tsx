import React from 'react'
import { Form, Container, Button, Nav, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import MenuContainer from '../../../styles/components/menu'

import SliderContainer from '../../../styles/components/slider'

const Menu = () => (
    <>
        <Navbar>
            <Nav className="mr-auto">
                <Nav.Link href="#home">SOBRE</Nav.Link>
                <Nav.Link href="#features">CONTATO</Nav.Link>
                <Nav.Link href="#pricing">GLOSSARIO</Nav.Link>
                <Nav.Link href="#pricing">TERMOS E CONDIÇÔES</Nav.Link>
            </Nav>
            <MenuContainer>
                <Row className="d-flex justify-content-center">
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col sm={8} className="my-1">
                                <Form.Label
                                    htmlFor="inlineFormInputName"
                                    srOnly
                                >
                                    Nome
                                </Form.Label>
                                <Form.Control
                                    id="inlineFormInputName"
                                    placeholder="Digite aqui sua pesquisa"
                                />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Enviar</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </MenuContainer>
        </Navbar>
    </>
)

export default Menu
