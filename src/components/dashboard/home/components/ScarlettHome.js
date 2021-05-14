import React from "react";
import "./home.css";

export const ScarlettHome = () => {
  return (
    <div className="row">
      <div className="d-flex justify-content-between ">
        <h2 className="fw-bold">Scarlett's Home</h2>
        <div className="me-3">
          <i className="fas fa-temperature-high fs-4 mt-2"></i>
          <i class="fas fa-tint fs-4 mt-2"></i>
        </div>
        <select class=" scarlett_home__select-form" >
          <option selected>Select on option!</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="col-2 scarlett_home__card me-2">
        <div className="d-flex justify-content-between mt-1">
          <span>On</span>
          <div className=" form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <i className="fas fa-paw fs-3 mt-2"></i>
        <p className="text-center">Pets</p>
      </div>
      <div className="col-3 scarlett_home__card me-2">
        <div className="d-flex justify-content-between mt-1">
          <span>On</span>
          <div className=" form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <i className="fas fa-dog fs-3 mt-2"></i>
        <p className="text-center">Dogs</p>
      </div>
      <div className="col-3 scarlett_home__card me-2">
        <div className="d-flex justify-content-between mt-1">
          <span>On</span>
          <div className=" form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <i className="fas fa-cat fs-3 mt-2"></i>
        <p className="text-center">Cats</p>
      </div>
      <div className="col-3 scarlett_home__card me-2">
        <div className="d-flex justify-content-between mt-1">
          <span>On</span>
          <div className=" form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <i className="fas fa-fish fs-3 mt-2"></i>
        <p className="text-center">Fish</p>
      </div>
    </div>
  );
};
