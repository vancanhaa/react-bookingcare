import React from "react";
import Slider from "react-slick";
import "./specialty.scss";

function Specialty({ settings }) {
  return (
    <div className="section-share section-specialty">
      <div className="section-container">
        <div className="section-header">
          <span className="title-section">Chuyên khoa phổ biến</span>
          <button className="btn-section">Xem thêm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-specialty"></div>
                </div>
                <div className="section-customize__title">Cơ xương khớp 1</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
