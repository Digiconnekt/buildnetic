import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer2 from "./components/Footer2";
import Header3 from "./components/Header3";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import ProductEngineeringServices from "./pages/services/ProductEngineeringServices";
import MobilityServices from "./pages/services/MobilityServices";
import CloudAndDevopsServices from "./pages/services/CloudAndDevopsServices";
import ProductReengineeringServices from "./pages/services/ProductReengineeringServices";
import AnalyticsServices from "./pages/services/AnalyticsServices";
import TestingServices from "./pages/services/TestingServices";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header3 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/product-engineering-services"
          element={<ProductEngineeringServices />}
        />
        <Route
          path="/services/mobility-services"
          element={<MobilityServices />}
        />
        <Route
          path="/services/cloud-and-devops-services"
          element={<CloudAndDevopsServices />}
        />
        <Route
          path="/services/product-reengineering-services"
          element={<ProductReengineeringServices />}
        />
        <Route
          path="/services/analytics-services"
          element={<AnalyticsServices />}
        />
        <Route
          path="/services/testing-services"
          element={<TestingServices />}
        />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer2 />
    </>
  );
};

export default App;
