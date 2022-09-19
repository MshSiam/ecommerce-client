import React from "react"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import categories from "../../categories"
import "./home.css"
import axios from "../../axios"
import { useDispatch, useSelector } from "react-redux"
import { updateProducts } from "../../redux/features/productSlice"
import ProductPreview from "../ProductPreview"

const AllProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const lastProducts = products.slice(0, 8)

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)))
  }, [])
  return (
    <Container fluid>
      <div className="recent-products-container container my-5">
        <h2 className="bg-info p-5 text-secondary rounded">
          View Product According To Categories
        </h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}>
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px"
                  }}
                  className="category-tile">
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>

      <div className="featured-products-container container my-4">
        <h2 className="my-4 bg-secondary p-5 text-white rounded">
          All Products
        </h2>
        {/* All product from backend */}
        <Container className="d-flex justify-content-center">
          <Row>
            {lastProducts.map((product) => (
              <ProductPreview {...product} key={product._id} />
            ))}
          </Row>
        </Container>
        <div>
          <Link
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none"
            }}
            to="/category/all">
            See more {">>"}
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default AllProducts
