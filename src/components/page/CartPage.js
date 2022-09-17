import React from "react"
import { Alert, Col, Container, Row, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import {
  useRemoveFromCartMutation,
  useDecreaseCartProductsMutation,
  useIncreaseCartProductMutation
} from "../../services/appApi"
import "./cartPage.css"

const CartPage = () => {
  const user = useSelector((state) => state.user)
  const products = useSelector((state) => state.products)
  const userCartObj = user.cart
  const [increaseCart] = useIncreaseCartProductMutation()
  const [decreaseCart] = useDecreaseCartProductsMutation()
  const [removeFromCart, { isLoading }] = useRemoveFromCartMutation()

  function handleDecrease(product) {
    const quantity = user.cart.count
    if (quantity <= 0) return alert("Can't proceed")
    decreaseCart(product)
  }

  let cart = products.filter((product) => userCartObj[product._id] != null)

  return (
    <Container style={{ minHeight: "90vh" }} className="cart-container">
      <Row>
        <h1 className="pt-2 mb-4 h3">Shopping Cart</h1>

        <Col md={5}>
          {cart.length === 0 ? (
            <Alert variant="info">Shopping Cart Is Empty</Alert>
          ) : (
            <div>Payment</div>
          )}
        </Col>
        <Col md={7}>
          {cart.length > 0 ? (
            <>
              <Table responsive="sm" className="cart-table">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  {/* loop through cart products */}
                  {cart.map((item) => (
                    <tr>
                      <td>&nbsp;</td>
                      <td>
                        {!isLoading && (
                          <i
                            className="fa fa-times"
                            style={{ marginRight: 10, cursor: "pointer" }}
                            onClick={() =>
                              removeFromCart({
                                productId: item._id,
                                price: item.price,
                                userId: user._id
                              })
                            }></i>
                        )}
                        <img
                          src={item.pictures[0].url}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover"
                          }}
                        />
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <span className="quantity-indicator">
                          <i
                            className="fa fa-minus-circle"
                            onClick={() =>
                              handleDecrease({
                                productId: item._id,
                                price: item.price,
                                userId: user._id
                              })
                            }></i>
                          <span>{user.cart[item._id]}</span>
                          <i
                            className="fa fa-plus-circle"
                            onClick={() =>
                              increaseCart({
                                productId: item._id,
                                price: item.price,
                                userId: user._id
                              })
                            }></i>
                        </span>
                      </td>
                      <td>${item.price * user.cart[item._id]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div>
                <h3 className="h4 pt-4 ">Total : ${user.cart.total}</h3>
              </div>
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
