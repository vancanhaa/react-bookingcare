import React from "react";
import Slider from "react-slick";
import "./medical-facility.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../constants/route.constant";
import vietduc from "../../../../assets/medical-facility/viet-duc.jpg";
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
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={vietduc} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bệnh viện hữu nghị Việt Đức
                </h4>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MedicalFacility;
