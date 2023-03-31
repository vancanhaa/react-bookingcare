import React from "react";
import Slider from "react-slick";
import "./medical-facility.scss";

function MedicalFacility({ settings }) {
  return (
    <div className="section-share section-medical-facility">
      <div className="section-container">
        <div className="section-header">
          <span className="title-section">Cơ sở y tế nổi bật</span>
          <button className="btn-section">Xem thêm</button>
        </div>
        <div className="section-body">
          <Slider {...settings}>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
            <div className="section-customize-wrap">
              <div className="section-customize">
                <div className="bg-image-wrap">
                  <div className="bg-image section-medical-facility"></div>
                </div>
                <div className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MedicalFacility;
