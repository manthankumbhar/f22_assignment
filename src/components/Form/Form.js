import React, { useState } from "react";
import "./Form.scss";
import logo from "../../assets/omega.svg";

export default function Form() {
  const [formInput, setForminput] = useState({
    email: "",
    companyName: "",
    password: "",
  });

  const onChange = (e) => {
    setForminput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="form" onSubmit={() => alert(JSON.stringify(formInput))}>
      <img src={logo} className="form__logo" alt="logo" />
      <form className="form__container">
        <h1 className="form__container--h1">Sign up</h1>
        <p className="form__container--p">No credit card required</p>
        <input
          required
          className="form__container--input"
          name="email"
          type="email"
          placeholder="Email address"
          onChange={(e) => onChange(e)}
        />
        <input
          required
          className="form__container--input"
          type="text"
          name="companyName"
          placeholder="Company name"
          onChange={(e) => onChange(e)}
        />
        <input
          required
          className="form__container--input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => onChange(e)}
        />
        <label className="form__container--label">
          <input
            required
            type="checkbox"
            className="form__container--checkbox"
          />
          I agree to <span>Terms and Conditions</span>
        </label>
        <button className="form__container--btn">Get Started</button>
        <p className="form__container--end">
          Already have an account? <span>Sign in</span>
        </p>
      </form>
    </div>
  );
}
