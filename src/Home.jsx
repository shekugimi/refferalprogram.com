import React from "react";
import Sharemarketdata from "./Sharemarketdata";
import './Home.css';
import Upireferdata from "./Upireferdata";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Footer from "./Footer";
const Home = () => {
  return (
    <>  
        <Navbar/>
        <Categories/>
        <Sharemarketdata/>
        <Upireferdata/>
        <Footer/>
    </>
  );
};
export default Home;

