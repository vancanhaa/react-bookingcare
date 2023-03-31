import React from "react";
import Slider from "react-slick";
import "./outstanding-doctor.scss";

function OutstandingDoctor({ settings }) {
  return (
    <div className="section-share section-outstanding-doctor">
      <div className="section-container">
        <div className="section-header">
          <span className="title-section">Bác sĩ nổi bật tuần qua</span>
          <button className="btn-section">Xem thêm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-outstanding-doctor"></div>
                </div>
                <div className="section-customize__title">Bác sĩ 1</div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OutstandingDoctor;
