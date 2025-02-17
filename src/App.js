import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/story" element={<Story />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
