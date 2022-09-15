import React from "react"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { logout } from "../redux/features/userSlice"
import "./navigation.css"

const Navigation = () => {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logout())
  }

  const user = useSelector((state) => state.user)
  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ecommerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </>
            )}

            {user && (
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <>
                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/createProduct">
                      <NavDropdown.Item>Create Product</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/manageProduct">
                      <NavDropdown.Item>Manage Product</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/manageOrders">
                      <NavDropdown.Item>Manage Orders</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/manageUsers">
                      <NavDropdown.Item>Manage Users</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                <LinkContainer to="/orders">
                  <NavDropdown.Item>My Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <NavDropdown.Item>Cart</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Button
                  variant="danger"
                  onClick={handleLogOut}
                  className="logout-btn mx-5">
                  Logout
                </Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
