import React from "react";

import { HeaderDashboard } from "../components/layout/header/HeaderDashboard";
import { SidebarDashboard } from "../components/layout/sidebar/SidebarDashboard";
import { DashboardRouter } from "../routes/DashboardRouter";

export const DashboardScreen = () => {
  return (
    <div className="row ">
      <div className="col-md-1 pt-2 pb-2 ">
        <SidebarDashboard />
      </div>

      <div className="col-md-11 mt-2 ">
        <HeaderDashboard />

        <DashboardRouter />
      </div>
    </div>
  );
};
