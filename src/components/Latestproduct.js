import React from 'react'
import latestproduct from "../css/latestproduct.css";
import { Link } from 'react-router-dom';

export default function Latestproduct() {
  return (
    <div className="container latestproduct d-flex">
      <div>
        <h5>
          <span class="text-red fw-bold">L</span>atest Arrivals
        </h5>
      </div>

      <div className="see-more ms-auto ">
        <Link to="/product">SEE MORE</Link>
      </div>
    </div>
  );
}
