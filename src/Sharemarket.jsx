import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Footer from "./Footer";
import "./Sharemarket.css";
import Sharemarketdata from "./Sharemarketdata";


const Sharemarket = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Sharemarketdata/>
     
      <Footer />
    </>
  );
};
export default Sharemarket;
