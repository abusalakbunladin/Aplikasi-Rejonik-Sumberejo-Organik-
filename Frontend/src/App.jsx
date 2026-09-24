import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home.jsx"
import Product from "./pages/product.jsx"
import Advantages from "./pages/advantages.jsx"
import About from "./pages/about.jsx"
import Sertificate from "./pages/sertificate.jsx"
import Review from "./pages/review.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Product />} />
        <Route path="/keunggulan" element={<Advantages />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/sertifikat" element={<Sertificate />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  )
}

