import React from "react";
import Slider from "react-slick";
import "./handbook.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../../constants/route.constant";
import handbook from "../../../../assets/handbook/handbook.jpg";
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
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
            <div className="section-customize">
              <Link to={ROUTE.SPECIALTY} className="section-customize__link">
                <div className="section-customize__image">
                  <img src={handbook} alt="Hình ảnh cẩm nang" />
                </div>
                <h4 className="section-customize__title">
                  Tâm lý hôn nhân và gia đình
                </h4>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Handbook;
