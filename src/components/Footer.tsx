import React from "react";
import "@/components/footer.scss";
import { ball, ins, logo, logo12, telegram, twit, yout } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="cards">
          <div className="card">
            <Image src={logo12} alt="asas" className="imag" />
            <p className="pp">
              Copyright © 2020 Nexcent ltd. <br />
              All rights reserved
            </p>
            <div className="img">
              <Image src={ins} alt="asas" className="imag" />
              <Image src={ball} alt="asas" className="imag" />
              <Image src={twit} alt="asas" className="imag" />
              <Image src={yout} alt="asas" className="imag" />
            </div>
          </div>
          <div className="cards__card">
          <div className="card">
            <h3 className="title">Company</h3>
            <p className="text">Abouy Us</p>
            <p className="text">Blog</p>
            <p className="text">Contact Us</p>
            <p className="text">Pricing</p>
            <p className="text">Testimonials</p>
          </div>
          <div className="card">
            <h3 className="title">Support</h3>
            <p className="text">Help Center</p>
            <p className="text">Terms of service</p>
            <p className="text">Legal</p>
            <p className="text">Privacy policy</p>
            <p className="text">Status</p>
          </div>
          <div className="card card__sec">
            <h3 className="tittle">Stay up to date</h3>
            <form className="form">
              <input
                type="email"
                className="search"
                placeholder="Your email address"
              />
              <Image src={telegram} alt="22" className="tel" />
            </form>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
