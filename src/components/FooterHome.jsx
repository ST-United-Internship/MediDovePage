import { Row, Col } from "antd";
import "../assets/footerhome.css";
import {
  PhoneFilled,
  MailOutlined,
  SwitcherOutlined,
  FlagOutlined,
} from "@ant-design/icons";

const FooterHome = () => {
  return (
    <>
      <div className="background-footer-home">
        <Row className="footer-home-top" gutter={24}>
          <Col span={24} md={16} lg={12} xl={10}>
            <div className="footer-home-contact">
              <div className="emergency-box">
                <div className="emergency-call-icon">
                  <PhoneFilled />
                </div>
                <div className="emergency-home-number">
                  <h6>Emergency Number</h6>
                  <span>202-555-0104</span>
                </div>
              </div>
              <div className="footer-logo">
                <a href="">
                  <img
                    src="https://medi-dove.netlify.app/img/logo/footer-logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="footer-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut.
                </p>
              </div>
              <div className="footer-email">
                <ul>
                  <li>
                    <MailOutlined className="footer-icon" />
                    info@examplemedical.com
                  </li>
                  <li>
                    <SwitcherOutlined className="footer-icon" />
                    examplemedical.com
                  </li>
                  <li>
                    <FlagOutlined className="footer-icon" />
                    227 Marion Street, Columbia
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            span={24}
            md={8}
            lg={{ offset: 2, span: 5 }}
            xl={{ offset: 2, span: 6 }}
          >
            <div className="footer-home-title">
              <h3>Departments</h3>
              <div className="footer-home-menu">
                <ul>
                  <li>
                    <a href="/services-details">Surgery and Radiology</a>
                  </li>
                  <li>
                    <a href="">Family Medicine</a>
                  </li>
                  <li>
                    <a href="">Women's Health</a>
                  </li>
                  <li>
                    <a href="">Optician</a>
                  </li>
                  <li>
                    <a href="">Pediatrics</a>
                  </li>
                  <li>
                    <a href="">Dermatology</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            span={24}
            lg={{ offset: 1, span: 4 }}
            xl={{ offset: 1, span: 5 }}
            className="cotba"
          >
            <div className="footer-home-title">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-home-menu">
              <ul>
                <li>
                  <a href="">Departments</a>
                </li>
                <li>
                  <a href="/doctor">Our Doctors</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Book an Apointment</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer-home-bottom">
        <div className="footer-home-bottom-text">
          <p>Copyright by@ BasicTheme - 2022 </p>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
