import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png "
        alt=""
      />
      <div className="featured-products-container container mt-4">
        <h2>Last Products</h2>
        {/* last product from backend */}
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
      <div className="sale_banner--container mt-4">
        <img
          src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png"
          alt=""
        />
      </div>
      <div className="recent-products-container container mt-4"></div>
    </div>
  )
}

export default Home
