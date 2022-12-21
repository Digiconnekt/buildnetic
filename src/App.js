import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer2 />
    </>
  );
};

export default App;
