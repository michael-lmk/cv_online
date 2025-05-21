import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ className, index, animate }) => {
  return (
    <div
      className={`slider ${className}`}
      data-index={index}>
      azerty {index}
    </div>
  );
};

export default Slider;
