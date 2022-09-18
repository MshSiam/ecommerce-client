import axios from "../../axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import "./orderPage.css"
import { Badge, Button, Container, Modal, Table } from "react-bootstrap"
import Loading from "../Loading"

const OrdersAdminPage = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const products = useSelector((state) => state.products)
  const [orderToShow, setOrderToShow] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/orders`)
      .then(({ data }) => {
        setLoading(false)
        setOrders(data)
        // console.log(data)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (orders.length === 0) {
    return <h1 className="mt-4 pt-4">No orders was found.</h1>
  }

  // markShipped
  const markShipped = (orderId, ownerId) => {
    axios
      .patch(`/orders/${orderId}/mark-shipped`, { ownerId })
      .then(({ data }) => setOrders(data))
      .catch((error) => console.log(error))
  }

  // showOrder
  const showOrder = (productObj) => {
    let productToShow = products.filter((product) => productObj[product._id])
    productToShow = productToShow.map((product) => {
      let productCopy = { ...product }
      productCopy.count = productObj[product._id]
      return productCopy
    })
    // console.log(productToShow)
    setShow(true)
    setOrderToShow(productToShow)
  }

  // handleClose
  const handleClose = () => {
    setShow(false)
  }

  return (
    <Container>
      <h1 className="text-center my-4 pb-4">Total orders</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Client Name</th>
            <th>Items</th>
            <th>Total </th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order._id}</td>
              <td>{order.owner?.name}</td>
              <td>{order.count}</td>
              <td>${order.total}</td>
              <td>${order.address}</td>

              <td>
                {order.status === "processing" ? (
                  <Button
                    size="sm"
                    onClick={() => markShipped(order._id, order.owner?._id)}>
                    Mark as shipped
                  </Button>
                ) : (
                  <Badge bg="success">Shipped</Badge>
                )}
              </td>
              <td>
                <span
                  className="btn"
                  style={{ cursor: "pointer" }}
                  onClick={() => showOrder(order.products)}>
                  View Order <i className="fa fa-eye"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order details</Modal.Title>
        </Modal.Header>
        {orderToShow.map((order) => (
          <div className="order-details__container d-flex justify-content-around py-2">
            <img
              src={order.pictures[0].url}
              style={{ maxWidth: 100, height: 100, objectFit: "cover" }}
            />
            <p>
              <span>{order.count} x </span> {order.name}
            </p>
            <p>Price: ${Number(order.price) * order.count}</p>
          </div>
        ))}
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default OrdersAdminPage
