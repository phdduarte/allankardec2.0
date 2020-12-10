import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

type Props = {
    placeholder: string
    buttonLabel: string
}
const Search = ({ placeholder, buttonLabel }: Props) => (
    <div>
        <Row className="d-flex justify-content-center">
            <Form>
                <Form.Row className="align-items-center">
                    <Col sm={8} className="my-1">
                        <Form.Control
                            id="inlineFormSearch"
                            placeholder={placeholder}
                        />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">{buttonLabel}</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Row>
    </div>
)

export default Search
