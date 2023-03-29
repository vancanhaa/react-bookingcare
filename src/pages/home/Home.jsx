import React from "react";
import HomeHeader from "./home-header/HomeHeader";
import "./home.scss";
import Specialty from "./section/Specialty";

function Home() {
  return (
    <div>
      <HomeHeader />
      <Specialty />
      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default Home;
