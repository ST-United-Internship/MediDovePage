import { Col, Row } from "antd";
import "../assets/css/about-us.css";
import "../assets/css/services/common-container.css";

const AboutUs = ({ aboutData }) => {
  return (
    <div className="container">
      <Row justify="space-between" wrap={true} className="about-us-container">
        <Col xs={24} lg={12} className="about-left">
          <img
            src="https://medi-dove.netlify.app/img/about/about-img.jpg"
            alt="image"
            className="doctor-img"
          />
          <img
            className="medical-icon"
            src="https://medi-dove.netlify.app/img/about/medical-brand-icon-border.png"
          />
        </Col>

        <Col xs={24} lg={12} className="desc">
          <h6>About Us</h6>
          <h1>Short Story About MediDove Clinic.</h1>
          <p>{aboutData[0]["about-us"]}</p>
          <div className="about-author">
            <div className="author-img-container">
              <img src="https://medi-dove.netlify.app/img/about/author-ava.png" />
            </div>

            <div className="author-desination">
              <p>Rosalina D. Williamson</p>
              <p>FOUNDER</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
