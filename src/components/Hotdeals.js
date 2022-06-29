import React,{useState} from 'react'
import hotdeals from "../css/hotdeals.css";
import CountdownTimer from "../components/CountdownTimer";
import  { Link } from "react-router-dom";
import Product from "../components/Product"

export default function Hotdeals() {

const [active,setActive]=useState("Firstcard");

  return (
    <div className="container hotdeals d-flex">
      <div>
        <h5>
          <span class="text-red fw-bold">H</span>ot Deals
        </h5>
      </div>

      <div className="timerforhotdeals">
        <CountdownTimer countdownTimestampMs={1659983662000} />
      </div>

      <div className="see-more ms-auto ">
        <Link to="/product">SEE MORE</Link>
      </div>




    </div>
  );
}
