import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Refercards.css";
import Img1 from "./images/upstoxrefer.png";
import Img2 from "./images/angelbrokingrefer.png";
import Img3 from "./images/5paisarp-min (1).jpg";

const Refercards = () => {
  return (
    <>
      <div className="row text-center mb-4 mt-2 mx-2  .bg-secondary border border-dark rounded bb ">

    {/* Card-11111111111111111111111111111111111111111111 */}
        <div className="col-lg-6 col-md-6 col-12 mt-3  mb-3 ">
          <div className="card">
            <img class="card-img-top" src={Img1} alt="Card image" />
            <div className="card-body border rounded be">

              <div className="d-flex justify-content-around  ">
                

                {/* p1 */}
                <p className=" headss border rounded mt-3 bc ">
                  <spana className="mx-3 font-weight-bolder text-uppercase">
                    <br></br>
                    upstox 
                    <br></br>
                    Refferal
                    <br></br>
                     programme
                  </spana>

                </p>
                
                {/* p2 */}

                <p className=" mt-3 bc border rounded">
                  <text className="font-weight-bold headss  ">
                    Refferal Reward
                  </text>
                  <br></br>
                  <br></br>
                  Rs.
                  <span className="font-weight-bold text-secondary mt-3">
                  400
                  </span>
                </p>

                  {/* p3 */}

                <p className=" mt-3 bc border rounded">
                  <sp className="font-weight-bold headss mx-3"> Target Audience</sp>
                  <br></br>
                  <br></br>
                  PAN INDIA<br></br> 
                  (18+ only)
                </p>
              </div>

              <a href="https://bv7np.app.goo.gl/rT2f" className="btn btn-primary mt-4 ba text-capitalize font-weight-bold " target="_avi">
                Join Program
              </a>
            </div>
          </div>
        </div>
    {/* Card-22222222222222222222222222222222222222222222 */}
        <div className="col-lg-6 col-md-6 col-12 mt-3  mb-3 ">
          <div className="card">
            <img class="card-img-top" src={Img2} alt="Card image" />
            <div className="card-body border rounded be">

              <div className="d-flex justify-content-around .bg-primary  ">
                

                {/* p1 */}
                <p className=" headss border rounded mt-3 bc ">
                  <spana className="mx-3 font-weight-bolder text-uppercase">
                    <br></br>
                    angel
                    <br></br>
                    Broking
                    <br></br>

                     programme
                  </spana>

                </p>
                
                {/* p2 */}

                <p className=" mt-3 bc border rounded">
                  <text className="font-weight-bold headss  ">
                    Refferal Reward
                  </text>
                  <br></br>
                  upto Rs.
                  <span className="font-weight-bold text-secondary mt-3">600</span>
                </p>

                  {/* p3 */}

                <p className=" mt-3 bc border rounded">
                  <sp className="font-weight-bold headss mx-3"> Target Audience</sp>
                  <br></br>
                  <br></br>
                  PAN INDIA<br></br> 
                  (18+ only)
                </p>
              </div>

              <a href="https://tinyurl.com/yezdvqt9" className="btn btn-primary mt-4 ba text-capitalize font-weight-bold " target="_avi">
                Join Program
              </a>
            </div>
          </div>
        </div>
    {/* Card-33333333333333333333333333333333333333333333 */}
        <div className="col-lg-6 col-md-6 col-12 mt-3  mb-3  ">
          <div className="card">
            <img class="card-img-top" src={Img3} alt="5 Paisa Refferal banner" />
            <div className="card-body border rounded be">

              <div className="d-flex justify-content-around .bg-primary  ">
                

                {/* p1 */}
                <p className=" headss border rounded mt-3 bc ">
                  <spana className="mx-3 font-weight-bolder text-uppercase">
                    <br></br>
                    5paisa
                    <br></br>
                    Refferal
                    <br></br>
                     programme
                  </spana>

                </p>
                
                {/* p2 */}

                <p className=" mt-3 bc border rounded">
                  <text className="font-weight-bold headss  ">
                    Refferal Reward
                  </text>
                  <br></br>
                  upto Rs.
                  <span className="font-weight-bold text-secondary mt-3">500</span>
                </p>

                  {/* p3 */}

                <p className=" mt-3 bc border rounded">
                  <sp className="font-weight-bold headss mx-3"> Target Audience</sp>
                  <br></br>
                  <br></br>
                  PAN INDIA<br></br> 
                  (18+ only)
                </p>
              </div>

              <a href="https://5paisa.page.link/LgfdphoLgPsNGYEM7" className="btn btn-primary mt-4 ba text-capitalize font-weight-bold " target="_avi">
                Join Program
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default Refercards;
