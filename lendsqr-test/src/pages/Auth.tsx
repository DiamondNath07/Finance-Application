import { useState } from "react";
import "./App.scss";
// import lendsqr from "../../public/images/lendsqr.svg";
// import logo from "../../public/images/Union.png";
// import artWork from "./images/onboardingImg.svg";

// import { useNavigate } from "react-router-dom";
import Lendsqr from "../assets/images/lendsqr.svg";

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
          {/* <img src={logo} alt="logo" className="iconLogo" /> */}

          <img src={Lendsqr} alt="text" />
        </span>
        <span className="onboarding">
          {/* <img src={artWork} alt="artwork" /> */}
        </span>
      </div>

      <div className="rightAuthPage">
        <h1>Authentication Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
