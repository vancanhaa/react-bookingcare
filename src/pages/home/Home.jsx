import React from "react";
import HomeHeader from "./home-header/HomeHeader";
import "./home.scss";
import Specialty from "./section/specialty/Specialty";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalFacility from "./section/medical-facility/MedicalFacility";
import OutstandingDoctor from "./section/outstanding-doctor/OutstandingDoctor";
import Handbook from "./section/handbook/Handbook";
function Home() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div>
      <HomeHeader />
      <Specialty settings={settings} />
      <MedicalFacility settings={settings} />
      <OutstandingDoctor settings={settings} />
      <Handbook settings={settings} />

      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default Home;
