import React from "react";
import { FormattedMessage } from "react-intl";
import {
  faBars,
  faCircleQuestion,
  faHospital,
  faMagnifyingGlass,
  faMicroscope,
  faMobile,
  faProcedures,
  faTooth,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import "./home-header.scss";
import logo from "../../../assets/logo-header.svg";
import { LANGUAGES } from "../../../constants/languages.constant";
import { changeLanguage } from "../../../store/reducers/app.slice";

function HomeHeader() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);
  return (
    <div className="home-header-container">
      <div className="home-header-content__wrap">
        <div className="home-header-content">
          <div className="left-content">
            <FontAwesomeIcon icon={faBars} />
            <img className="header-logo" src={logo} alt="logo"></img>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="homeheader.speciality" />
                </b>
              </div>
              <div className="sub-title">
                <FormattedMessage id="homeheader.search-doctor" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="homeheader.health-facility" />
                </b>
              </div>
              <div className="sub-title">
                <FormattedMessage id="homeheader.select-room" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="homeheader.doctor" />
                </b>
              </div>
              <div className="sub-title">
                <FormattedMessage id="homeheader.select-doctor" />
              </div>
            </div>
            <div className="child-content">
              <div>
                <b>
                  <FormattedMessage id="homeheader.fee" />
                </b>
              </div>
              <div className="sub-title">
                <FormattedMessage id="homeheader.check-health" />
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <FormattedMessage id="homeheader.support" />
            </div>
            <div
              className={
                language === LANGUAGES.VI ? "language-vi active" : "language-vi"
              }
              onClick={() => dispatch(changeLanguage(LANGUAGES.VI))}
            >
              <b>VN</b>
            </div>
            <div
              className={
                language === LANGUAGES.EN ? "language-en active" : "language-en"
              }
              onClick={() => dispatch(changeLanguage(LANGUAGES.EN))}
            >
              <b>EN</b>
            </div>
          </div>
        </div>
      </div>
      <div className="home-header-banner">
        <div className="content-up">
          <div className="title1">
            <FormattedMessage id="banner.title1" />
          </div>
          <div className="title2">
            <FormattedMessage id="banner.title2" />
          </div>
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
          </div>
        </div>
        <div className="content-down">
          <div className="options">
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faHospital} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child1" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faMobile} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child2" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faProcedures} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child3" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faMicroscope} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child4" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child5" />
              </div>
            </div>
            <div className="option-child">
              <div className="icon-child">
                <FontAwesomeIcon icon={faTooth} />
              </div>
              <div className="text-child">
                <FormattedMessage id="banner.child6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
