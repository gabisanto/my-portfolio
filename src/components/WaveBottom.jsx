import React from "react";

const WaveBottom = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
      <path
        fill={color}
        fill-opacity="1"
        d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
};

export default WaveBottom;
