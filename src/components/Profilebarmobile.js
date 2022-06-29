import React from "react";
import profilebarmobile from "../css/profilebarmobile.css";
import { Link } from "react-router-dom";

export default function Profilebarmobile() {
    return (
      <div id="profilebarmobile">
        <div className="container profilebarmobile1">
          <div class="child-p row">
            <i class="fa-solid fa-house"></i>
            <Link to="/home" class="cart3">
              Home
            </Link>
          </div>

          <div class="child-p row">
            <i class="fas fa-th"></i>
            <a href="#" class="cart3">
              Category
            </a>
          </div>

          <div class="child-p row">
            <i class="fa-solid fa-cart-shopping"> </i>
            <a href="#" class="cart3">
              Cart
            </a>
          </div>

          <div class="child-p row">
            <i class="fa-solid fa-user"></i>
            <Link to="/login" class="cart3">
              Account
            </Link>
          </div>
        </div>
      </div>
    );
}
