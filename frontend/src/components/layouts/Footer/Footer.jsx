import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app from andriod and Iphone </p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quaity is our first priority</p>
        <p>Copyright 2021 &copy; me ravi</p>
      </div>
      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="">Instgram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
      </div>
    </div>
  );
};

export default Footer;
