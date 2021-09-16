import React from "react";
import Navbar from "./Navbar";
import "./About.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
function About() {
  return (
    <>
      <Navbar />
      
      <div className="about-wrapper ">
        <div className="about-left a2">
          <div className="about-left-content a3">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img
                    src="./abhishekprofilepic.png"
                    alt="Abhishek profile pic"
                  />
                </div>
              </div>

              <h2>Abhishek Parmar</h2>
              <h3 className="myprofession">
                ENTREPRENEUR<br></br>&<br></br>MERN STACK DEVELOPER
              </h3>
            </div>

            <ul className="icons">
              <li>
                <i className="fab fa-facebook-f">
                  
                  <a
                    href="https://www.facebook.com/profile.php?id=100034651867499"
                    target="_avi"
                  >
                   
                    <FaFacebookSquare className="facebook" />
                  </a>
                </i>
              </li>

              <li>
                <i className="fab fa-linkedin">
                  <a href="https://www.linkedin.com/in/abhishek-parmar-4563841b0/" target="_avi"> 
                  <FaLinkedin className="linkedin" /></a>
                </i>
              </li>
              <li>
                <i className="fab fa-instagram">
                 
                  <a href="https://www.instagram.com/" target="_avi">
                    <FaInstagramSquare className="instagram" />
                  </a>
                </i>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right a1">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          
          

          <div className="about-para">
            {/* <span className="square"></span> */}
            <span className="linea"></span>
            <p>
              My name is Abhishek Parmar. I am pursuing BTech. CSE from LPU
              Jalandhar, Punjab.
            </p>

            <p>
              Along with my studies, I am learning entrepreneurship and MERN
              STACK DEVELOPMENT and as well as implementing whatever I am
              learning.{" "}
            </p>
            <div className="line text-center ">
            <span className="square"></span>
            <br></br>
            <span className="line1"></span>
            <br></br>
            <span className="line2"></span>
            <br></br>
            <span className="line3"></span>
            <br></br>
            <span className="line4"></span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
