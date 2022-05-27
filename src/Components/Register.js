import React from "react";
import "../styles/main.css";

const Register = () => {
  return (
    <>
      <div className="main-login">
        <div className="bg-login"></div>
        <div className="login-form register-form">
          <div className="login-body">
            <div className="login-title">
              <h5>Register</h5>
              <p>Enter your mobile number to continue</p>
            </div>
            <form>
              <div className="data">
                <label>Input your Mobile</label>
                <input />
                <svg className="">
                  <path
                    fill="#00000088"
                    d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"
                  ></path>
                </svg>
              </div>

              <div className="forgot-section">
                <ul>
                  <li className="register register-atc">
                    <a href="login.html"> Already have an account </a>
                  </li>
                </ul>
                <button className="login-btn">Send OTP</button>
                <p>
                  By Loggin in, I agree Billvale’s <span>Privacy Policy</span>{" "}
                  and
                  <span>Terms of Service</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
