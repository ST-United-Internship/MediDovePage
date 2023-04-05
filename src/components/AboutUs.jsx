import { Col, Row } from "antd";
import "../assets/css/about-us.css";

const AboutUs = () => {
  return (
    <>
      <Row justify="center" wrap={true} className="about-us-container">
        <Col xs={24} sm={24} md={24} lg={8} xl={10} className="about-left">
          <img
            src="https://medi-dove.netlify.app/img/about/about-img.jpg"
            alt="image"
            className="doctor-img"
            s
          />
          <img
            className="medical-icon"
            src="https://medi-dove.netlify.app/img/about/medical-brand-icon-border.png"
          />
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={10} className="desc">
          <h6>About Us</h6>
          <h1>Short Story About MediDove Clinic.</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
    </>
  );
};

export default AboutUs;
