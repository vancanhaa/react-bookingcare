import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { Navigate } from "react-router";

import "./login.scss";
import { ROUTE } from "../../constants";
import { loginAction } from "../../store/actions/auth.action";

function Login() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [valueForm, setValueForm] = useState({ email: "", password: "" });
  const handleChangeValueForm = (name, value) => {
    setValueForm({ ...valueForm, [name]: value });
  };
  const handleLoginForm = () => {
    dispatch(loginAction(valueForm));
  };
  if (userInfo && userInfo["role_id"] === "1") {
    return <Navigate to={ROUTE.SYSTEM} />;
  }
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="text-login col-12">Login</div>
          <div className="login-input col-12 form-group">
            <label htmlFor="login-email">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              id="login-email"
              value={valueForm.email}
              name="email"
              onChange={(e) =>
                handleChangeValueForm(e.target.name, e.target.value)
              }
            />
          </div>
          <div className="login-input col-12 form-group">
            <label htmlFor="login-password">Password:</label>
            <div className="custom-input__password">
              <input
                type={isShowPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                id="login-password"
                value={valueForm.password}
                name="password"
                onChange={(e) =>
                  handleChangeValueForm(e.target.name, e.target.value)
                }
              />

              <span
                className="eye-icon__wrap"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>
          </div>
          <div className="col-12 text-danger">{}</div>
          <div className="col-12">
            <button className="btn-login" onClick={() => handleLoginForm()}>
              Login
            </button>
          </div>
          <div className="col-12">
            <span className="forgot-password">Forgot your password?</span>
          </div>
          <div className="col-12 text-center mt-3">
            <span className="text-other-login">Or Login with:</span>
          </div>
          <div className="col-12 social-login">
            <div className="google-icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </div>
            <div className="facebook-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
