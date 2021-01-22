import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

type Props = {
    placeholder: string
    buttonLabel: string
}
const Search = ({ placeholder, buttonLabel }: Props) => (
    <div>
        <Row className="d-flex justify-content-center">
            <Form method="GET" action="/search">
                <Form.Row className="align-items-center">
                    <Col sm={8} className="my-1">
                        <Form.Control
                            id="inlineFormSearch"
                            name="title"
                            placeholder={placeholder}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button className="btn" type="submit">{buttonLabel}</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Row>
    </div>
)

export default Search
