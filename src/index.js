import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import StoryPage from "./pages/Story";
import ContactPage from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* ✅ Changed to HashRouter */}
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
