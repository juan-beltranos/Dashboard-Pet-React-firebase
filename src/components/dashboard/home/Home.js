import React from "react";
import { HeaderHome } from "./components/HeaderHome";
import { ScarlettHome } from "./components/ScarlettHome";

export const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <HeaderHome />
        <ScarlettHome/>
      </div>
    </div>
  );
};
