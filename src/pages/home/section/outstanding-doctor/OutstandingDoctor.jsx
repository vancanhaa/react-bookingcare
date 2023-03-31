import React from "react";
import Slider from "react-slick";
import "./outstanding-doctor.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../constants/route.constant";
import bacsi from "../../../../assets/outstanding-doctor/bac-si-1.jpg";
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
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={bacsi} alt="logo bệnh viện" />
                </div>
                <h4 className="section-customize__title">
                  Bác sĩ chuyên khoa II Trần Minh Khuyên
                </h4>
                <p className="section-customize__description">
                  Sức khỏe tâm thần- Tư vấn, trị liệu tâm lý
                </p>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OutstandingDoctor;
