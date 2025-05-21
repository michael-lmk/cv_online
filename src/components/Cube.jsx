import React, { useState, useEffect, useRef } from "react";
import "./Cube.css";
import HomePage from "../screens/Home/Home";
import About from "../screens/About/About";
import Skills from "../screens/Skills/Skills";
import Contact from "../screens/Contact/Contact";

const Cube = ({ rotation, isShrinking }) => {
  const [cubeSize, setCubeSize] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const sidebarWidth = document.body.style.getPropertyValue("--sidebar-width");
      setCubeSize(ref.current.clientWidth - sidebarWidth); // Enlever la largeur de la sidebar
      console.log(ref.current.clientWidth / 2);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialiser la taille
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translateZ = -cubeSize / 2; // Calculer la profondeur pour centrer le cube

  return (
    <div className="cube-container">
      <div
        ref={ref}
        className={`cube`}
        style={{
          transform: `rotateY(-${rotation}deg) translate3d(0, 0, ${translateZ}px) scale(${isShrinking ? "0.90" : "1"})`
        }}>
        <div className="cube-face front">
          <HomePage />
        </div>

        <div className="cube-face right">
          <About />
        </div>

        <div className="cube-face back">
          <Skills />
        </div>

        <div className="cube-face left">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Cube;
