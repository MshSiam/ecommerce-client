import axios from "../../axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Loading from "../Loading"
import { Badge, Table } from "react-bootstrap"

const ClientsAdminPage = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("/users")
      .then(({ data }) => {
        setLoading(false)
        setUsers(data)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error.message)
      })
  }, [])

  if (loading) return <Loading />

  if (users?.length === 0) {
    return <h2 className="pt-4 mt-4">No user was found.</h2>
  }

  return (
    <div className="my-5" style={{ minHeight: "50vh" }}>
      <h3 className="bg-info py-4 my-5 rounded">All Orders</h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Client Id</th>
            <th>Client Name</th>
            <th>Email </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientsAdminPage
