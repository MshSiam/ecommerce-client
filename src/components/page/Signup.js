import React, { useState } from "react"
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./signup.css"
import { useSignupMutation } from "../../services/appApi"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signup, { error, isLoading, isError }] = useSignupMutation()

  const handleSingup = (e) => {
    e.preventDefault()
    signup({ name, email, password })
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSingup}>
            <h1>Create an Account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}

            <Form.Group className="my-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required></Form.Control>
            </Form.Group>

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
                onChange={(e) => setPassword(e.target.value)}
                required></Form.Control>
            </Form.Group>

            <Form.Group className="my-2">
              <Button type="submit" disabled={isLoading}>
                Signup
              </Button>
            </Form.Group>

            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  )
}

export default Signup
