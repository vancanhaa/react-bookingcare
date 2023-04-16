import React from "react";
import { Outlet } from "react-router";
import HeaderSystem from "./header-system/HeaderSystem";

function System() {
  return (
    <>
      <HeaderSystem />
      <div className="system-container">
        <div className="system-list">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default System;
