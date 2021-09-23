import React from "react";
import Navbar from "./Navbar";
import "./Contact.css";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-center">
        <h1>
          If you have any compaint or any other legal<br></br> issue then mail me on{" "}
        </h1>
        <h2 className="gmail">abhishekparmar7649@gmail.com</h2>
        <br></br>
        <h1> or </h1>
        <br></br>
        <br></br>
        <a
          href="https://wa.me/917440513747"
          className="btn  wab  text-capitalize font-weight-bold a2 watup"
          target="_avi"
        >
          <FaWhatsappSquare className="wa" />
          What's app me
        </a>
      </div>
    </>
  );
};

export default Contact;
