import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./specialty.scss";
function Specialty() {
  const settings = {
    dots: false,
    isFinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="section-specialty">
      <div className="specialty-container">
        <div className="specialty-header">
          <span className="title-section">Chuyên khoa phổ biến</span>
          <button className="btn-section">Xem thêm</button>
        </div>
        <div className="specialty-body">
          <Slider {...settings}>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 1</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 2</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 3</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 4</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 5</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 6</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 7</div>
            </div>
            <div className="specialty-customize">
              <div className="bg-image-wrap">
                <div className="bg-image"></div>
              </div>
              <div className="specialty-customize__title">Cơ xương khớp 8</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
