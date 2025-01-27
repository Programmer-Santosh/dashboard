import React from "react";
import "../css/bannerTop.css";
const BannerTop = () => {
  return (
    <div className="bannerTop">
      <h1 className="bannerHeading">Welcome ! </h1>
      <div className="line"></div>
      <div className="square-box"></div>
      <div className="traingle-box"></div>
      <div className="userText">
        {" "}
        <span className="color-bold">User</span>{" "}
        <span className="bold">&#62;&#62; </span> Home
      </div>
    </div>
  );
};

export default BannerTop;
