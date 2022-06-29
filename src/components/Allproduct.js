import product from "../css/allproduct.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Ourproducttitle from "./Ourproducttitle";


const Allproduct = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container product-cart">
      <Ourproducttitle />
      <div className="allproducts-container">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}

        {data.map((product) => (
          <div key={product.id} className="card">
            <div className="cart-image">
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description3">
              <a className="productlink3" href="url">
                {product.title}
              </a>
              <h6>Price: {`${product.price}`}৳</h6>
            </div>
            <div className="testtext">
              <span>
                <a href="#">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Allproduct;
