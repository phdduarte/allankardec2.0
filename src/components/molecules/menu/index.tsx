import React from 'react'
import { Form, Container, Button, Nav, Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import MenuContainer from '../../../styles/components/menu'

const Menu = () => (
    <>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img className="d-block w-100" src="/slider1.jpg" alt="Imagem Slider 1" />
                <Carousel.Caption>
                    <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img className="d-block w-100" src="/slider2.jpg" alt="Imagem Slider 2" />
                <Carousel.Caption className="box-carousel-title">
                    <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img className="d-block w-100" src="/slider3.jpg" alt="Imagem Slider 3" />
                <Carousel.Caption>
                    <span>ALLANKARDEC.ONLINE - MUSEU ONLINE DO ESPIRITISMO</span>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Navbar>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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
