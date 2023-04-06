import { Col, Row } from "antd";
import "../assets/AboutMember.css";

const AboutMember = ({ aboutMemberData }) => {
  return (
    <>
      <div className="team-area">
        <div className="container-member">
          <Row justify={"center"}>
            <Col span={10} className="text-container">
              <div className="container-tittle">
                <div className="icon-img">
                  <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
                </div>
                <div className="text-tittle">
                  <h5>Our Team</h5>
                  <h1>A Professional & Care Provider</h1>
                </div>
                <div className="text-line">
                  <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
                  .
                </div>
              </div>
            </Col>
            <Col span={10} className="button-text">
              <div className="button-icon">
                <div className="button-primary">
                  <span>+</span>
                  <a>Make Appointment</a>
                </div>
              </div>
            </Col>
          </Row>

          <Row justify="center">
            {aboutMemberData[0]["our-team"].map((item) => (
              <Col span={7} className="button-container">
                <div className="button-tittle">
                  <div className="themb-img">
                    <img src={item.img} />
                    <a className="themb-link">+</a>
                  </div>
                  <div className="text-content">
                    <h3>{item.name}</h3>
                    <h6>FOUDER</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutMember;
