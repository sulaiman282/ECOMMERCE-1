import React, { useEffect, useState } from "react";
import axios from "axios";
import latestproductlist from "../css/latestproductlist.css";

export default function Latestproductlist() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/electronics",
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
              <h6>Price: {`${product.price+2000}`}৳</h6>
            </div>
            <div className="testtext2">
              <span>
                <a href="#">
                  <i class="fa-solid fa-heart"></i>
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
}
