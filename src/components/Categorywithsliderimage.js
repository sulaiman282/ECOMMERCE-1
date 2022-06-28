import React from "react";
import categorywithsliderimage from "../css/categorywithsliderimage.css";
import Slider1 from "../img/slider1.jpg";
import Slider2 from "../img/slider2.jpg";
import Slider3 from "../img/slider3.jpg";

import Promo1 from "../img/promo1.jpg";
import Promo2 from "../img/promo2.jpg";
import Promo3 from "../img/promo3.jpg";

export default function Categorywithsliderimage() {
  return (
    <div id="Categorywithsliderimage1">
      <div className="container Categorywithsliderimage2 d-flex align-items-center">
        <div className="Categorywithsliderimage3 ">
          <p class="ourcat">Our Categories</p>
          <ul class="list-unstyled">
            <li>
              <a href="" title="">
                Fashion & Beauty
              </a>
            </li>
            <li>
              <a href="" title="">
                TV & Home Appliances
              </a>
            </li>
            <li>
              <a href="" title="">
                Groceries & Pets
              </a>
            </li>
            <li>
              <a href="" title="">
                Bags, Jewellery
              </a>
            </li>

            <li>
              <a href="" title="">
                Electronic Devices
              </a>
            </li>
            <li>
              <a href="" title="">
                Electronic Accessories
              </a>
            </li>
            <li>
              <a href="" title="">
                Home & Lifestyle
              </a>
            </li>
            <li>
              <a href="" title="">
                Babies & Toys
              </a>
            </li>
            <li>
              <a href="" title="">
                Automotive & Motorbike
              </a>
            </li>
          </ul>
        </div>
        <div className="sliderimage">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark p-4"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner item-x">
              <div class="carousel-item active" data-bs-interval="6000">
                <img src={Slider1} class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="bg-white1">
                    <span className="text-danger">20%</span> off on new Polo
                    T-shirts.
                  </h3>
                  <button class="chkbtn p-2"> Checkout</button>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src={Slider2} class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="bg-white1">Special Offer Samsung Mobile</h3>
                  <button class="chkbtn p-2"> Checkout</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Slider3} class="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="bg-white1">Latest Asus Laptop Arrived</h3>
                  <button class="chkbtn p-2"> Checkout</button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="promoad1">
          <img src={Promo1} alt="Promo ad1"></img>

          <img src={Promo2} alt="Promo ad2"></img>
          <img src={Promo3} alt="Promo ad3"></img>
        </div>
      </div>
    </div>
  );
}
