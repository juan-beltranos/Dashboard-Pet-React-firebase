import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const SidebarDashboard = () => {
  return (
    <div className="dashboard__menu p-2">
      <ul className="navbar-nav  mb-lg-0">
        <li className="nav-item m-auto mb-3 mt-3">
          <Link to="/home">
            <i className="fas fa-home text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/settings">
            <i className="fas fa-ellipsis-v text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/idea">
            <i className="fas fa-lightbulb text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/security">
            <i className="fas fa-shield-alt text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/location">
            <i className="fas fa-map-marker-alt text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/users">
            <i className="fas fa-user-friends text-light fs-2"></i>
          </Link>
        </li>
        <li className="nav-item m-auto mb-3">
          <Link to="/signal">
            <i className="fas fa-signal text-light fs-2"></i>
          </Link>
        </li>
        
        <li className="nav-item m-auto mt-5">
          <a className="nav-link" href="#">
            <i className="fas fa-sign-in-alt text-light fs-2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
