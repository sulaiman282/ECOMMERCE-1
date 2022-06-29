import product from "../css/product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=8",
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
      <div className="products-container">
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
            <div className="card-description">
              <a className="productlink" href="url">
                {product.title}
              </a>
              <h6>
                Price:{" "}
                <span className="offeritem">{`${product.price + 100}`}</span>
                {`${product.price}`}৳
              </h6>
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

export default Product;
