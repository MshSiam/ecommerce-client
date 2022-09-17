import axios from "../../axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading"
import { Col, Container, Row } from "react-bootstrap"
import ProductPreview from "../ProductPreview"
import "./category.css"

const Category = () => {
  const { category } = useParams()
  console.log(category)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [searchItems, setSearchItem] = useState("")

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/products/category/${category}`)
      .then(({ data }) => {
        setLoading(false)
        setProducts(data)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error.message)
      })
  }, [category])

  if (loading) {
    return <Loading />
  }

  const productsSearch = products.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLowerCase())
  )

  return (
    <div className="category-page-container">
      <div
        className={`pt-3 ${category}-banner-container category-banner-container`}>
        <h1 className="text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      </div>
      <div className="filters-container d-flex justify-content-center pt-4 pb-4">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      {productsSearch.length === 0 ? (
        <h1>No Products Found.</h1>
      ) : (
        <Container>
          <Row>
            {productsSearch.map((product) => (
              <ProductPreview {...product} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Category
