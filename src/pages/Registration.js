import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";
import { registerInitiate } from "../redux/action";

export const Registration = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
    passwordConfirm: "",
  });

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { email, password, displayName, passwordConfirm } = state;

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="userEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password (minimum 6 digits)"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i>Sign Up
          </button>
          <Link to="/login">
            <i className="fas fa-angle-left"></i> Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
