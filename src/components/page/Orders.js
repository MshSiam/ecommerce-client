import axios from "../../axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import "./orderPage.css"
import { Badge, Container, Table } from "react-bootstrap"
import Loading from "../Loading"

const Orders = () => {
  const user = useSelector((state) => state.user)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/users/${user._id}/orders`)
      .then(({ data }) => {
        setLoading(false)
        setOrders(data)
        console.log(data)
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
    return <h1 className="mt-4 pt-4">No orders yet.</h1>
  }

  return (
    <Container style={{ minHeight: "50vh" }}>
      <h1 className="text-center">Your orders</h1>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order._id}</td>
              <td>
                <Badge
                  bg={`${order.status == "processing" ? "warning" : "success"}`}
                  text="white">
                  {order.status}
                </Badge>
              </td>
              <td>{order.date}</td>

              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Orders
