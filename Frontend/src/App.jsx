import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Product from "./pages/product.jsx";
import Advantages from "./pages/advantages.jsx";
import About from "./pages/about.jsx";
import Certificate from "./pages/certificate.jsx";
import Contact from "./pages/contact.jsx";
import FAQ from "./pages/faq.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Product />} />
        <Route path="/keunggulan" element={<Advantages />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/sertifikat" element={<Certificate />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
