import React from "react";
import "./home-footer.scss";
function HomeFooter() {
  return (
    <div className="home-footer">
      <p>
        &copy; 2023 Bookingcare V2 with CanhPham. More infomation, please visit
        my profile.
        <a
          href="https://www.facebook.com/phamvan.canh.526/"
          target="_blank"
          rel="noreferrer"
        >
          &rarr; Click here&larr;
        </a>
      </p>
    </div>
  );
}

export default HomeFooter;
