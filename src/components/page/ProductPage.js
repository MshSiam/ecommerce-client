import axios from "../../axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import AliceCarousel from "react-alice-carousel"
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loading from "../Loading"
import SimilarProducts from "../SimilarProducts"
import "./productPage.css"
import { LinkContainer } from "react-router-bootstrap"
import "react-alice-carousel/lib/alice-carousel.css"

const ProductPage = () => {
  const { id } = useParams()
  const user = useSelector((state) => state.user)

  const [product, setProduct] = useState(null)
  const [similar, setSimilar] = useState(null)

  const handleDragStart = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product)
      setSimilar(data.similar)
    })
  }, [id])

  if (!product) {
    return <Loading />
  }

  const responsive = {
    0: { item: 1 },
    568: { item: 2 },
    1024: { item: 3 }
  }

  const images = product.pictures.map((picture) => (
    <img
      src={picture.url}
      className="product__carousel--image"
      onDragStart={handleDragStart}
    />
  ))

  let similarProducts = []
  if (similar) {
    similarProducts = similar.map((product, idx) => (
      <div className="item" data-value={idx}>
        <SimilarProducts {...product} />
      </div>
    ))
  }

  return (
    <Container className="pt-4" style={{ position: "relative" }}>
      <Row>
        <Col lg={6}>
          <AliceCarousel
            mouseTracking
            items={images}
            controlsStrategy="alternate"
          />
        </Col>
        <Col lg={6} className="pt-4 mt-4" style={{ textAlign: "center" }}>
          <h1>{product.name}</h1>
          <p>
            Category : <Badge bg="warning">{product.category}</Badge>
          </p>

          <h3>
            Price : <strong> ${product.price}</strong>
          </h3>
          <p style={{ textAlign: "right" }} className="py-3">
            <strong>Description : </strong>
            {product.description}
          </p>
          {user && !user.isAdmin && (
            <ButtonGroup style={{ width: "90%" }}>
              <Form.Select
                size="lg"
                style={{ width: "40%", borderRadius: "0" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
              <Button size="lg" className="btn-secondary">
                Add to Cart
              </Button>
            </ButtonGroup>
          )}

          {user.isAdmin && (
            <LinkContainer to={`/product/${product._id}/edit`}>
              <Button size="lg" className="btn-danger">
                Edit Product
              </Button>
            </LinkContainer>
          )}
        </Col>
      </Row>

      <div className="my-4">
        <h2>Similar Products</h2>
        <div className="d-flex justify-content-center align-item-center flex-wrap">
          <AliceCarousel
            mouseTracking
            items={similarProducts}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </Container>
  )
}

export default ProductPage
