import React from "react";
import "./auth.css";

export const Register = () => {
  return (
    <div className="pt-4">
      <div className="row justify-content-center alingn-items-center m-auto auth__container">
        <div className="auth__form col-auto ">
          <h1 className="fw-bold text-center mt-3 mb-5">Register</h1>

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
            <div className="mb-3 input-group">
              <label className="form-label">Confirm Password</label>
              <br />
              <input type="password" placeholder="Type your password" />
            </div>
            <p className="text-end">Forgot password?</p>
            <input type="submit" value="REGISTER" className="btn-login" />
          </form>

          <div className="text-center mt-5">
            <p>Or Register Using</p>
            <p className="text-uppercase"> Register a Count</p>
          </div>
        </div>
      </div>
    </div>
  );
};
