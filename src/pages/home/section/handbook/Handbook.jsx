import React from "react";
import Slider from "react-slick";
import "./handbook.scss";

function Handbook({ settings }) {
  return (
    <div className="section-share section-handbook">
      <div className="section-container">
        <div className="section-header">
          <span className="title-section">Cẩm nang</span>
          <button className="btn-section">Xem thêm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>{" "}
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-handbook"></div>
                </div>
                <div className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Handbook;
