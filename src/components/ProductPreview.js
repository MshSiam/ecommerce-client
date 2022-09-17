import React from "react"
import { Badge, Card, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const ProductPreview = ({ _id, category, name, pictures, price }) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <LinkContainer
        to={`/product/${_id}`}
        style={{ cursor: "pointer", width: "13rem", margin: "10px" }}>
        <Card style={{ width: "20rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            className="product-preview-img"
            src={pictures[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Badge bg="warning" text="dark">
              {category}
            </Badge>
            <h3 className="mt-2">${price}</h3>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  )
}

export default ProductPreview
