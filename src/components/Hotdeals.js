import React from 'react'
import hotdeals from "../css/hotdeals.css";
import CountdownTimer from "../components/CountdownTimer";
 

export default function Hotdeals() {
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
        <a href="#">SEE MORE</a>
      </div>
    </div>
  );
}
