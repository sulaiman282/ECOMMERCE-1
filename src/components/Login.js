import login from "../css/login.css";
import React from 'react'
import logo3 from '../img/logo3.png'
import { Link } from "react-router-dom";


export default function Login() {

   

  return (
    <div className="login-page">
      <div class="container-fluid">
        <div class="row main-content bg-success text-center">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
              <h2>
                <img src={logo3} alt="BEST BUY" class="logomain"></img>
              </h2>
            </span>
            <h4 class="company_title">
              Combining quality and reliability in one
            </h4>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="row mt-3">
                <h2>Log In</h2>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form__input"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div class="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form__input"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div class="remember-me">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      class="me-3"
                    ></input>
                    <label for="remember_me">Remember Me!</label>
                  </div>
                  <div class=" form-group">
                    <input type="submit" value="Submit" class="btn"></input>
                  </div>
                </form>
              </div>
              <div class="row">
                <p>
                  Don't have an account? <Link to="/signup">Register Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

