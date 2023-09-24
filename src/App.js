/* eslint-disable */

// react & Library
import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// style
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

//pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import DesignSystem from "./pages/DesignSystem";
import SDC23 from "./pages/SDC23";
import SDC22 from "./pages/SDC22";
import Timebank from "./pages/Timebank";
import SignalLive from "./pages/SignalLive";
import Motions from "./pages/Motions";
import Jelly from "./pages/Jelly";
import MobileBlock from "./pages/MobileBlock";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div className="App">
      {isDesktopOrMobile !== true ? (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designsystem" element={<DesignSystem />} />
            <Route path="/sdc23" element={<SDC23 />} />
            <Route path="/sdc22" element={<SDC22 />} />
            <Route path="/timebank" element={<Timebank />} />
            <Route path="/signal-live" element={<SignalLive />} />
            <Route path="/jelly-monster" element={<Jelly />} />
            <Route path="/motions" element={<Motions />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <MobileBlock />
      )}
    </div>
  );
}

export default App;
