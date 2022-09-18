import React from "react"
import { Button, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDeleteProductMutation } from "../services/appApi"

const DashboardProducts = () => {
  const products = useSelector((state) => state.products)
  const user = useSelector((state) => state.user)

  //   delete product
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation()
  const handleDeleteProduct = (id) => {
    if (window.confirm("This Action Can not be UNDONE. Are You Sure ? ")) {
      return deleteProduct({ product_id: id, user_id: user._id })
    }
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>
              <img
                src={product.pictures[0].url}
                alt=""
                className="dashboard-product-preview"
                height="100px"
              />
            </td>

            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button
                disabled={isLoading}
                className="btn-danger"
                onClick={() => handleDeleteProduct(product._id, user._id)}>
                Delete
              </Button>
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-warning">
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DashboardProducts
