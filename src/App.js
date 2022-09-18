import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/page/Home"
import Login from "./components/page/Login"
import Signup from "./components/page/Signup"
import { useSelector } from "react-redux"
import NewProduct from "./components/page/NewProduct"
import ProductPage from "./components/page/ProductPage"
import Category from "./components/page/Category"
import ScrollToTop from "./components/ScrollToTop"
import CartPage from "./components/page/CartPage"
import Orders from "./components/page/Orders"
import AdminDashboard from "./components/page/AdminDashboard"
import EditProductPage from "./components/page/EditProductPage"

function App() {
  const user = useSelector((state) => state.user)
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {!user && (
            <>
              {" "}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {user && !user.isAdmin && (
            <>
              {" "}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<Orders />} />
            </>
          )}

          {user && user.isAdmin && (
            <>
              <Route path="/createProduct" element={<NewProduct />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/product/:id/edit" element={<EditProductPage />} />
            </>
          )}
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
