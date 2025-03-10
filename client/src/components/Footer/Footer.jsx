import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer " id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="font-bold text-xl sm:text-3xl flex flex-wrap">
            <span className="text-slate-500">Work</span>
            <span className="text-slate-700">Link</span>
          </h1>
          {/* <img src={assets.logo} alt="" /> */}
          <p>
            WorkLink is a specialized app designed to connect clients with
            skilled workers for construction projects. Whether you need
            contractors, laborers, or specialists, WorkLink makes it easy to
            find and hire the right professionals for your job. Simplify your
            construction projects with our user-friendly platform, ensuring
            efficient and reliable service every time.
          </p>
          <div className="footer-social-icons">
            {/* <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" /> */}
          </div>
        </div>
        <div className="footer-content-center">
          <h2 className="text-xl font-bold">COMPANY</h2>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
        </div>
        <div className="footer-content-right">
          <h2 className="text-xl font-bold">GET IN TOUCH</h2>
          <ul>
            <li>+91-12345678</li>
            <li>worklink@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright text-black">
        <span>Copyright 2025 © All Right Reserved</span>
        <br />
        <div className="m-auto text-center font-serif ">
          <span>
            Design & Developed by Brijmohan{" "}
            <span className="text-red-700">❤</span>
          </span>
        </div>
      </p>
    </div>
  );
};

export default Footer;
