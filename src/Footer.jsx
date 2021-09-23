import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="bg-primary text-white fa m">
        <article className="py-5 text-center">
          <div>
            <h3 className="display-5 text-white text-uppercase ">
              If you have any query then DM me.
            </h3>
            <div className="sm">
              <ul className="smd d-flex justify-content-center  ">
                <li>
                  <a href="https://www.instagram.com/" target="_avi">
                    <FaInstagramSquare className="instagram" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/abhishek-parmar-4563841b0/"
                    target="_avi"
                  >
                    <FaLinkedin className="linkedin" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100034651867499"
                    target="_avi"
                  >
                    <FaFacebookSquare className="facebook" />
                  </a>
                </li>
              </ul>
              <a href="https://wa.me/917440513747" className="btn  wab  text-capitalize font-weight-bold a2 watup" target="_avi">
                <FaWhatsappSquare className="wa"/>What's app me
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default Footer;
