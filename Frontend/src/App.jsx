import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Product from "./pages/product.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

