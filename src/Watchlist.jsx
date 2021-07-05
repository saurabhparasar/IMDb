import React from "react";
import "./Watchlist.css";

function Watchlist() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
        alt=""
      />

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>password</h5>
          <input type="password" />
          <button type="submit" className="login__signInButton">
            Signin
          </button>
        </form>
        <p>By signing-in, you agree to IMDb's termns and condition</p>
        <button className="login__registerButton">
          Create your IMDb Account
        </button>
      </div>
    </div>
  );
}

export default Watchlist;
