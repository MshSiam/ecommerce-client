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
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const lastProducts = products.slice(0, 8)

  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)))
  }, [])
  return (
    <Container fluid>
      {/* <img
        src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png "
        alt=""
        className="img-fluid"
      /> */}

      {/* carousel */}
      <Container fluid>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              style={{
                maxHeight: "70vh",
                width: "100%",
                backgroundImage: "cover"
              }}
              src="https://images.unsplash.com/photo-1518997554305-5eea2f04e384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="text-secondary bg-dark rounded">
              <h3>Buy the Product you need.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              style={{
                maxHeight: "70vh",
                width: "100%",
                backgroundImage: "cover"
              }}
              src="https://images.unsplash.com/photo-1464380573004-8ca85a08751a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=800&q=60"
              alt="First slide"
            />
            <Carousel.Caption className="text-secondary bg-dark rounded">
              <h3>Buy the Product you need.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              style={{
                maxHeight: "70vh",
                width: "100%",
                backgroundImage: "cover"
              }}
              src="https://images.unsplash.com/photo-1575909812264-6902b55846ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="text-secondary bg-dark rounded">
              <h3>Buy the Product you need.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              style={{
                maxHeight: "70vh",
                width: "100%",
                backgroundImage: "cover"
              }}
              src="https://www.how2pc.com/wp-content/uploads/2022/01/Parts-Needed-to-Build-a-Gaming-PC.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-secondary bg-dark rounded">
              <h3>Buy the Product you need.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              style={{
                maxHeight: "70vh",
                width: "100%",
                backgroundImage: "cover"
              }}
              src="https://images.samsung.com/is/image/samsung/assets/us/monitors/high-resolution/lineup.png?$FB_TYPE_B_PNG$"
              alt="First slide"
            />
            <Carousel.Caption className="text-secondary bg-dark rounded">
              <h3>Buy the Product you need.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

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
