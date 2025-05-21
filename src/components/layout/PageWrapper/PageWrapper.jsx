import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../../../screens/Home/Home";
import AboutPage from "../../../screens/About/About";
import ContactPage from "../../../screens/Contact/Contact";

const CubeWrapper = ({ rotation }) => {
  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{ transform: `rotateY(${rotation}deg)` }}>
        <div className="face front">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
          </Routes>
        </div>
        <div className="face right">
          <Routes>
            <Route
              path="/about"
              element={<AboutPage />}
            />
          </Routes>
        </div>
        <div className="face back">
          <Routes>
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </div>
        <div className="face left">
          <div className="empty">Empty</div>
        </div>
      </div>
    </div>
  );
};

export default CubeWrapper;
