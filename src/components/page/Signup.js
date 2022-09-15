import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./signup.css"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit="">
            <h1>Create an Account</h1>

            <Form.Group className="my-2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required></Form.Control>
            </Form.Group>

            <Form.Group className="my-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.password)}
                required></Form.Control>
            </Form.Group>

            <Button className="my-2" type="submit">
              Signup
            </Button>
            <p>
              Already have an account ? <Link to="/login">login</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  )
}

export default Signup
