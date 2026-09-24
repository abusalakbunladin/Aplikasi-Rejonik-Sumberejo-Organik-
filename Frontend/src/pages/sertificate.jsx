import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Order from "./components/order-section.jsx";

export default function Sertificate() {
  return (
    <div className="app">
      <Navbar />
      <Order />
      <Footer />
    </div>
  );
}