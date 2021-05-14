import React from "react";
import "./header.css";

export const HeaderDashboard = () => {
  return (
    <div className="d-flex bd-highlight">
      <div className="me-auto mt-2 bd-highlight">
        <input className="header_dashboard__search" placeholder="Search" />
      </div>
      <div className="p-2 bd-highlight">
        <i className="far fa-comments fs-3"></i>
      </div>
      <div className="p-2 bd-highlight">
        <i className="far fa-bell fs-3"></i>
      </div>
      <div className="p-2 bd-highlight me-4">
        <i className="far fa-user fs-3">
          <span className="fs-5">
            Sebastian <i className="fas fa-arrow-down fs-6"></i>
          </span>
        </i>
      </div>
    </div>
  );
};
