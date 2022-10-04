import React from "react";

const WaveTop = ({ color }) => {
  return (
    <svg viewBox="0 0 1440 200">
      <path
        fill={color}
        fill-opacity="1"
        d="M0,192L1440,128L1440,320L0,320Z"
      ></path>
    </svg>
  );
};

export default WaveTop;
