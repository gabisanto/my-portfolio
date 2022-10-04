import React from "react";
import "./Footer.css";

const index = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <p className="text">
        {" "}
        2021 <a href="https://hembdrpun.com.np/">Hem</a> | All Rights Reserved |
      </p>
    </footer>
  );
};

export default index;
