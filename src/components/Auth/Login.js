import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

export const Login = () => {
  return (
    <div className="pt-4">
      <div className="row justify-content-center alingn-items-center  m-auto auth__container">
        <div className="auth__form col-auto ">
          <h1 className="fw-bold text-center mt-3 mb-5">Login</h1>
          <form>
            <div className="mb-3 input-group">
              <label className="form-label">Username</label>
              <br />
              <input type="text" placeholder="Type your username" />
            </div>
            <div className="mb-3 input-group">
              <label className="form-label">Password</label>
              <br />
              <input type="password" placeholder="Type your password" />
            </div>
            <p className="text-end">Forgot password?</p>
            <input type="submit" value="LOGIN" className="btn-login" />
          </form>
          <div className="text-center mt-5">
            <p>Or Sign Up Using</p>
            <div className="social">
              <i className="fab fa-facebook fs-1"></i>
              <i className="fab fa-twitter fs-1 ms-2 "></i>
              <i className="fas fa-envelope fs-1 ms-2 primary"></i>
            </div>
            <Link to="/auth/register" className="mt-2">Register Here!</Link>
          </div>
          <div className="text-center mt-3">
            <p>Or Sign Up Using</p>
            <p className="text-uppercase"> sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};
