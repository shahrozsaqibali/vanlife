import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Header from "./pages/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./pages/footer"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail";

export default function App(){
    return (
        
        <BrowserRouter>
            <Header />
 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />

            </Routes>

            <Footer />
        </BrowserRouter>
    )
}