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

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const lastProducts = products.slice(0, 8)

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)))
  }, [])
  return (
    <Container fluid>
      <img
        src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png "
        alt=""
        className="img-fluid"
      />
      <div className="featured-products-container container mt-4">
        <h2>Last Products</h2>
        {/* last product from backend */}
        <Container className="d-flex justify-content-center">
          <Row>
            {lastProducts
              .map((product) => (
                <ProductPreview {...product} key={product._id} />
              ))
              .slice(0, 10)}
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
      {/* banner */}
      <Container fluid className="sale__banner--container mt-4">
        <img
          src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png"
          alt=""
          className="img-fluid"
        />
      </Container>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
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
    </Container>
  )
}

export default Home
