import React from "react";
import svg from "../../assets/Red_blue_illustration_Kids_Toys_logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className=" p-10 bg-base-200 rounded-xl ">
      <div className="footer text-base-content">
        <div>
          <img src={svg} alt="" className="w-32" />
          <h1 className="text-5xl">
            <span className="text-orange-500 font-bold">KidZ</span>oo
          </h1>
        </div>
        <div>
          <span className="footer-title">Support & Contact us</span>
          <a className="link link-hover">Refund and Return</a>
          <a className="link link-hover">Partners</a>
          <a className="link link-hover">Customer Support</a>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: kiddzoo@123.com</p>
        </div>
        <div></div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">LinkedIn</a>
        </div>
        <div>
          <span className="footer-title">Shipping & Returns</span>
          <a className="link link-hover">Track Order</a>
          <a className="link link-hover">Shipping Info</a>
          <a className="link link-hover">Store Pickup</a>
          <a className="link link-hover">Same Day Delivery</a>
        </div>
      </div>
      <div className="text-center">
        <p>
          <small>© 2023 KidZoo. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
