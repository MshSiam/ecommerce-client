import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/page/Home"
import Login from "./components/page/Login"
import Signup from "./components/page/Signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
