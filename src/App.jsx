import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/layout/SideBar/Sidebar";
import Cube from "./components/Cube";


function App() {
  const [rotation, setRotation] = useState(0);
  const [isShrinking, setIsShrinking] = useState(false);

  const handleRotate = (direction) => {
    setIsShrinking(true);
    setRotation(() => direction * 90);
    setTimeout(() => {
      setIsShrinking(false);
    }, 1000);
  };

  return (
    <div className="app">
      <Sidebar handleRotate={handleRotate} />
      <Cube
        isShrinking={isShrinking}
        rotation={rotation}
      />
    </div>
  );
}

export default App;
