import React from "react";
import profilebarmobile from "../css/profilebarmobile.css";


export default function Profilebarmobile() {
    return (
      <div id="profilebarmobile">
        <div className="container profilebarmobile1">
          <div class="child-p row">
            <i class="fa-solid fa-house"></i>
            <a href="#" class="cart3">
              Home
            </a>
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
            <a href="#" class="cart3">
              Account
            </a>
          </div>
        </div>
      </div>
    );
}
