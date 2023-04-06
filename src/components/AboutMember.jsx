import { Col, Row } from "antd";
import "../assets/AboutMember.css";

const AboutMember = ({ aboutMemberData }) => {
  return (
    <div className="team-area container">
      <Row justify={"center"}>
        <Col span={24} lg={12} className="text-container">
          <div className="container-title">
            <div className="icon-img">
              <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
            </div>
            <div className="text-title">
              <h5>Our Team</h5>
              <h1>A Professional & Care Provider</h1>
            </div>
            <div className="text-line">
              <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
            </div>
          </div>
        </Col>
        <Col span={10} lg={12} className="button-text">
          <div className="button-icon">
            <div className="button-primary">
              <span>+</span>
              <a>Make Appointment</a>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" gutter={24}>
        {aboutMemberData[0]["our-team"].map((item, index) => (
          <Col
            key={index}
            span={24}
            md={12}
            lg={8}
            className="button-container"
          >
            <div className="themb-img">
              <img src={item.img} />
              <a className="themb-link">+</a>
            </div>
            <div className="text-content">
              <h3>{item.name}</h3>
              <h6>FOUDER</h6>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutMember;
