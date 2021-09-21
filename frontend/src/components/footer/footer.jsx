import react from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <div className="full-footer">
      <div className="main-info">
        <div className="social-media-container">
          <a
            href="https://www.linkedin.com/in/mike-criollo-b38377206/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/mkcriollo" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="http://mikecriollo.com/" target="_blank">
            <i class="far fa-user-circle"></i>
          </a>
        </div>
        <p>GET IN TOUCH</p>
        <p>IM ALL OVER THE WEB</p>
        <div className="made-by">
          <i class="far fa-copyright"></i>
          <p>2021 MIKE CRIOLLO</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
