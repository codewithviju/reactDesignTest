import React from "react";
import "../styles/main.css";
const Login = () => {
  return (
    <>
      <div className="main-login">
        <div className="bg-login"></div>
        <div className="login-form">
          <div className="login-body">
            <div className="login-title">
              <h5>Login</h5>
              <p>Enter your username and password to login</p>
            </div>
            <form>
              <div className="data">
                <label>Input your mobile or email</label>
                <input />
                <svg className="">
                  <path
                    fill="#00000088"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
                  ></path>
                </svg>
              </div>
              <div className="data m-data">
                <label>Input your password</label>
                <input />
                <svg className="">
                  <path
                    fill="#00000088"
                    d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                  ></path>
                </svg>
                {/* <!-- <svg className="eye"> 
                <path fill="#00000088" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>F
              </svg> --> */}
                <svg className="eye">
                  <path
                    fill="#00000088"
                    d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                  ></path>{" "}
                </svg>
              </div>
              <div className="forgot-section">
                <ul>
                  <li>
                    <a href="#">Forgot password</a>
                  </li>
                  <li className="register">
                    <a href="register.html">Register new</a>
                  </li>
                </ul>
                <button className="login-btn">Login</button>
                <button className="otp-btn">LOGIN VIA</button>
                <p>
                  By Loggin in, I agree Billvale’s <span>Privacy Policy</span>{" "}
                  and <span>Terms of Service</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
