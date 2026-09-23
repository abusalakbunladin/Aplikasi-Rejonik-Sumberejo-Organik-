import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

export default function Advantages() {
    return (
        <div className="app">
            <Navbar />
            <Footer />
        </div>
    )
}