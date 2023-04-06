import { PhoneFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
import "../assets/css/DepartmentContact.css";

const DepartmentContact = ({ serviceData }) => {
  console.log("check:", serviceData);
  return (
    <section className="caculate-area">
      <div className="contact-container calculate_wrapper">
        <Row justify={"center"}>
          <Col
            lg={{ span: 14 }}
            md={{ span: 24 }}
            sm={{ span: 22 }}
            xs={{ span: 22 }}
          >
            <div className="section-title">
              <div className="section-text">
                <h5>make a call</h5>
                <h1>{serviceData[0]["makeCall"].title}</h1>
                <p>{serviceData[0]["makeCall"].desc}</p>
              </div>
            </div>
            <div className="section-button">
              <a href="" className="btn-icon">
                <span>+</span>
                Make Appointment
              </a>
            </div>
          </Col>
          <Col
            lg={{ span: 10 }}
            md={{ span: 24 }}
            sm={{ span: 22 }}
            xs={{ span: 22 }}
          >
            <div className="caculate-box">
              <div className="caculate-content">
                <Row>
                  <Col span={24}>
                    <select name="" id="" className="form-select select_style">
                      <option value="">When would you like our support?</option>
                      <option value="">When would you like our support?</option>
                    </select>
                  </Col>
                  <Col span={24}>
                    <select name="" id="" className="form-select select_style">
                      <option value="">When would you like us arrive?</option>
                      <option value="">When would you like our support?</option>
                    </select>
                  </Col>
                  <Col span={24}>
                    <select name="" id="" className="form-select select_style">
                      <option value="">How long should we stay?</option>
                      <option value="">When would you like our support?</option>
                    </select>
                  </Col>
                  <Col span={24}>
                    <select name="" id="" className="form-select select_style">
                      <option value="">Where are you located?</option>
                      <option value="">When would you like our support?</option>
                    </select>
                  </Col>
                  <Col span={24}>
                    <form className="caculate-form">
                      <input type="text" placeholder="Your Phone Number" />
                      <PhoneFilled
                        style={{
                          position: "absolute",
                          right: "30px",
                          top: "28px",
                          color: "#647589",
                          fontSize: "14px",
                        }}
                      />
                    </form>
                  </Col>
                </Row>
              </div>
              <a href="#" className="primary_btn">
                submit query
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DepartmentContact;
