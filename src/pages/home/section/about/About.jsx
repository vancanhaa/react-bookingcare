import React from "react";
import "./about.scss";
import VTV1_logo from "../../../../assets/about/VTV1_logo.svg.png";
import vnexpress_logo from "../../../../assets/about/vnexpress_logo.svg";
import suc_khoe_va_doi_song_logo from "../../../../assets/about/suc_khoe_va_doi_song_logo.svg";

function About() {
  return (
    <div className="section-share section-about">
      <div className="section-container">
        <div className="section-header">
          <div className="title-section">
            Truyền thông nói gì về Bookingcare V2
          </div>
        </div>{" "}
        <div className="section-body">
          <div className="content-left">
            <iframe
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                >
                  <img src={VTV1_logo} alt="VTV1 logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vnexpress_logo} alt="VTV1 logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={suc_khoe_va_doi_song_logo} alt="VTV1 logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={VTV1_logo} alt="VTV1 logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vnexpress_logo} alt="VTV1 logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.ht"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={suc_khoe_va_doi_song_logo} alt="VTV1 logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
