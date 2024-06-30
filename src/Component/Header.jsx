import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { catrs } = useSelector((state) => state.allCart);
  // console.log(catrs);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand ms-5"
            style={{ fontWeight: 600, fontSize: "1cm" }}
            to="/"
          >
            E-Commerce
          </Link>
          <Link
            className="navbar-brand ms-5"
            style={{ fontWeight: 600, fontSize: "1cm" }}
            to="/cartdetail"
          >
            <div id="ex4">
              <span className="p1 fa-stack has-badge" data-count={catrs.length}>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
