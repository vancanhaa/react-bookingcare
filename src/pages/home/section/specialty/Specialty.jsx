import React from "react";
import Slider from "react-slick";
import "./specialty.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../constants/route.constant";
import coXuongKhop from "../../../../assets/specialty/co-xuong-khop.jpg";
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
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={coXuongKhop} alt="" />
                </div>
                <h4 className="section-customize__title">Cơ xương khớp 1</h4>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Specialty;
