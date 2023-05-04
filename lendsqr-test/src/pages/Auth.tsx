import { useState } from "react";
import "./App.scss";
import Lendsqr from "../assets/images/lendsqr.svg";
import Logo from "../assets/images/logo.svg";
import OnboardingImg from "../assets/images/onbaordingImg.png";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lendsqrUser = { email, password };
    localStorage.setItem("lendsqrUser", JSON.stringify(lendsqrUser));
    const storedUser = localStorage.getItem("lendsqrUser");
    if (storedUser) {
      window.location.href = "/";
    }
  };

  return (
    <div className="authPage">
      <div className="leftAuthPage">
        <span className="logo">
          <img src={Logo} alt="logo" className="iconLogo" />
          <img src={Lendsqr} alt="text" />
        </span>
        <span className="onboardingImg">
          <img src={OnboardingImg} alt="artwork" className="artwork" />
        </span>
      </div>

      <div className="rightAuthPage">
        <header>
          <h1 className="title">Welcome!</h1>
          <p className="titleText">Enter details to login</p>
        </header>
        <form onSubmit={handleSubmit} className="form">
          <div className="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="emailInput"
            />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="displayPasscode">SHOW</p>
          </div>
            <p className="passwordRetrieve">forgot password</p>
          <div className="submitBtn">
            <button type="submit">log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
