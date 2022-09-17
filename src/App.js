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

function App() {
  const user = useSelector((state) => state.user)
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/createProduct" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<Category />} />

          {!user && (
            <>
              {" "}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
