import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import "./header-system.scss";
import { logOut } from "../../../store/reducers/auth.slice";
import Navigator from "../../../components/navigator/Navigator";
import { LANGUAGES } from "../../../constants/languages.constant";
import { changeLanguage } from "../../../store/reducers/app.slice";

function HeaderSystem() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className="header-container">
      {/* thanh navigator */}
      <div className="header-tabs-container">
        {/* <Navigator menus={adminMenu} /> */}
        <Navigator />
      </div>

      <div className="languages">
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
        {/* nút logout */}
        <div className="btn btn-logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
    </div>
  );
}

export default HeaderSystem;
