import React, { useState } from "react";
import "./App.css";
import video from './video.mp4'


const BasicForm = () => {
  const [eyeLogo, seteyeLogo] = useState("eye");
  const showPassword = () => {
    if (eyeLogo === "eye") {
      seteyeLogo("eye-slash");
    } else {
      seteyeLogo("eye");
    }
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    if (email && password) {
      alert("Form Submitted");
    }
    else {
      e.preventDefault();
      alert("Please enter both the details.");
    }
  };

  return (
    <>
      <video autoPlay loop muted playsInline >
        <source src={video} />
      </video>
      <div className="formbox">
        <form className="form" onSubmit={submitForm}>
          <span className="login">Login Form</span>
          <div className="emailpassword">
            <div className="email">
              <label>Email</label>
            </div>
            <div className="emailBox">
              <div>
                <i className="fa-solid fa-envelope fa-xl"></i>
              </div>
              <input
                className="emailinput"
                placeholder="Enter your Email:"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="password">
              <label>Password</label>
            </div>
            <div className="passwordBox">
              <div>
                <i className="fa-solid fa-lock fa-xl"></i>
              </div>
              <input
                className="passwordinput"
                placeholder="Enter your Password:"
                type={eyeLogo === "eye" ? "password" : "text"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span className="eye">
                <i
                  className={`fa-solid fa-${eyeLogo} fa-lsm`}
                  onClick={showPassword}
                ></i>
              </span>
            </div>
            <span className="forgotBox">
              <span className="forgot">
                <a href="www.google.com">Forgot Password?</a>
              </span>
            </span>
            <div className="loginBox">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
            <div className="logoDiv">
              <span>or login using</span>
              <div className="logo">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png"
                  alt="facebook-IMG"
                  href="#facebook"
                />
                <img
                  src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png"
                  alt="google-IMG"
                  href="#google"
                />
                <img
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-512.png"
                  alt="twitter-IMG"
                  href="#twitter"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicForm;
