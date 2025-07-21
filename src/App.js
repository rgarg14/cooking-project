import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Regions from "./pages/Regions";
import Special from "./pages/Special";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import RegionDetails from "./pages/RegionDetails";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgeVerification from "./components/AgeVerification";

// Styles
import "./App.css";
import "./styles/Home.css";
import "./styles/Products.css";
import "./styles/Blog.css";
import "./styles/Contact.css";
import "./styles/Regions.css";
import "./styles/Special.css";
import "./styles/Signup.css";
import "./styles/Login.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Cart.css";

function App() {
  return (
    <Router>
      <AgeVerification />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/special" element={<Special />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/regions/:country" element={<RegionDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
