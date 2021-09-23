import React from "react";
import "./Categories.css";
import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <>
      <navbar2 className="d-flex justify-content-center mt-2">
        <c className="c font-weight-bold ">
          <NavLink
            exact
            className="text-light"
            activeClassName="active_class"
            to="/"
          >
            All
          </NavLink>
        </c>
        <c className="c font-weight-bold ">
          <NavLink
            exact
            className="text-light"
            activeClassName="active_class"
            to="/sharemarket"
          >
            Sharemarket
          </NavLink>
        </c>
        <c className=" c font-weight-bold ">
          <NavLink
            exact
            className="text-light "
            activeClassName="active_class"
            to="/upiapps"
          >
            Bhim Upi Apps
          </NavLink>
        </c>
      </navbar2>
    </>
  );
};
export default Categories;
