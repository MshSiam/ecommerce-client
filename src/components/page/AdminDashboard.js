import React from "react"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import DashboardProducts from "../DashboardProducts"
import "./adminDashboard.css"
import ClientsAdminPage from "./ClientsAdminPage"
import OrdersAdminPage from "./OrdersAdminPage"

const AdminDashboard = () => {
  return (
    <Container>
      <Tab.Container defaultActiveKey="products">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="manageOrders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="clients">Clients</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="products">
                <DashboardProducts />
              </Tab.Pane>
              <Tab.Pane eventKey="manageOrders">
                <OrdersAdminPage />
              </Tab.Pane>
              <Tab.Pane eventKey="clients">
                <ClientsAdminPage />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default AdminDashboard
