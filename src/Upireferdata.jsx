import React from 'react';
import "./Upirefercards.css";
import { Card } from "react-bootstrap";
import phonepe from "./images/PhonePe.png";
import paytm from "./images/paytm.png";
import amazonpay from "./images/amazonpay.png";


function Upireferdata(){
    return(
        <>
             {/* Cards */}
      <div className=" row mainc xa mt-2 d-flex justify-content-center">
        <Card
          className="xa xb text-center text-light mt-5 mx-5 "
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src={phonepe} alt="phonepe banner" />
          <Card.Body>
            <Card.Title className="tia">PhonePe</Card.Title>
            <Card.Text>
              <p className="ct">₹150</p>
              <p className="ctp">PER REFERRAL</p>
            </Card.Text>
            <a
              href="https://phon.pe/dpmjuznp"
              className="btn btn-primary mt-4 btu ba text-capitalize font-weight-bold "
              target="_avi"
            >
              Join Program
            </a>
          </Card.Body>
        </Card>

        <Card
          className="xa xb text-center text-light mt-5 mx-5 "
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src={paytm} alt="paytm banner" />
          <Card.Body>
            <Card.Title className="tia">PayTm</Card.Title>
            <Card.Text>
              <p className="ct">₹100</p>
              <p className="ctp">PER REFERRAL</p>
            </Card.Text>
            <a
              href="https://p.paytm.me/xCTH/213128d8"
              className="btn btn-primary mt-4 btu ba text-capitalize font-weight-bold "
              target="_avi"
            >
              Join Program
            </a>
          </Card.Body>
        </Card>

        <Card
          className="xa xb text-center text-light mt-5 mx-5 mb-5"
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src={amazonpay} alt="Amazon Pay  banner" />
          <Card.Body>
            <Card.Title className="tia">Amazon Pay</Card.Title>
            <Card.Text>
              <p className="ct">₹75</p>
              <p className="ctp">PER REFERRAL</p>
            </Card.Text>
            <a
              href="https://amzn.in/aqL7hoL"
              className="btn btn-primary mt-4 btu ba text-capitalize font-weight-bold "
              target="_avi"
            >
              Join Program
            </a>
          </Card.Body>
        </Card>
      </div>







        </>
    );
}
export default Upireferdata;