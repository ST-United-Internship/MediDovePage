import { Row, Col } from "antd";
import "../assets/footertotal.css";
import {
  MailOutlined,
  SwitcherOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const FooterTotal = () => {
  return (
    <>
      <div className="background-footer-total">
        <Row className="footer-total-top" gutter={[24, 40]}>
          <Col span={24} md={12} xl={8}>
            <div className="footer-total-contact">
              <div className="footer-total-logo">
                <Link to="/">
                  <img
                    src="https://medi-dove.netlify.app/img/logo/footer-logo-3.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="footer-total-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
              </div>
              <div className="footer-total-email">
                <ul>
                  <li>
                    <MailOutlined className="footer-total-icon" />
                    info@examplemedical.com
                  </li>
                  <li>
                    <SwitcherOutlined className="footer-total-icon" />
                    examplemedical.com
                  </li>
                  <li>
                    <FlagOutlined className="footer-total-icon" />
                    227 Marion Street, Columbia
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={24} md={12} xl={8}>
            <div className="footer-total-title">
              <h3>Departments</h3>
              <div className="footer-total-menu">
                <ul>
                  <li>
                    <Link to="/services-details">Surgery and Radiology</Link>
                  </li>
                  <li>
                    <Link to="/services-details">Departments </Link>
                  </li>
                  <li>
                    <Link to="/services-details">Family Medicine</Link>
                  </li>
                  <li>
                    <Link to="/doctor">Our Doctors</Link>
                  </li>
                  <li>
                    <Link to="/services-details">Women’s Health</Link>
                  </li>
                  <li>
                    <Link to="/services-details">News</Link>
                  </li>

                  <li>
                    <Link to="/">Optician</Link>
                  </li>
                  <li>
                    <Link to="/">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Pediatrics</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/services-details">Dermatology</Link>
                  </li>
                  <li>
                    <Link to="/">Book An Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={24} md={12} xl={8} className="cotba">
            <div className="footer-total-title">
              <h3>News feeds</h3>
            </div>

            {/* <div className="blog-phit"> */}
            <div className="single-blog-phit">
              <div className="phit-thumb">
                <Link to="/">
                  <img
                    src="https://medi-dove.netlify.app/img/blog/feeds-thumb-1.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="phit-text">
                <h5>
                  <Link to="/">Lorem ipsum dolor sit am et, consectetur.</Link>
                </h5>
                <span className="phit-date">14 Feb 2022</span>
              </div>
            </div>
            <div className="single-blog-phit">
              <div className="phit-thumb">
                <Link to="/">
                  <img
                    src="https://medi-dove.netlify.app/img/blog/feeds-thumb-2.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="phit-text">
                <h5>
                  <Link to="/">Lorem ipsum dolor sit am et, consectetur.</Link>
                </h5>
                <span className="phit-date">14 Feb 2022</span>
              </div>
            </div>
            <div className="single-blog-phit">
              <div className="phit-thumb">
                <Link to="/">
                  <img
                    src="https://medi-dove.netlify.app/img/blog/feeds-thumb-3.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="phit-text">
                <h5>
                  <Link to="/">Lorem ipsum dolor sit am et, consectetur.</Link>
                </h5>
                <span className="phit-date">14 Feb 2022</span>
              </div>
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </div>

      <div className="footer-total-bottom">
        <div className="footer-total-bottom-text">
          <p>Copyright by@ BasicTheme - 2022 </p>
        </div>
      </div>
    </>
  );
};

export default FooterTotal;
