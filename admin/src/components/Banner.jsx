import React from "react";
import BannerTop from "./BannerTop.jsx";
import "../css/banner.css";
import Overview from "./Overview.jsx";
import Admininfo from "./Admininfo.jsx";
const Banner = () => {
  return (
    <>
      <BannerTop />
      <div className="hr-line"></div>
      <div className="full-banner">
        <div className="adminInfo">
          <Admininfo/>
        </div>
        <div className="overV">
          <Overview />
        </div>
      </div>
    </>
  );
};

export default Banner;
