import { PhoneFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
import "../assets/css/DepartmentContact.css";
import { useNavigate } from "react-router-dom";

const DepartmentContact = ({ serviceData }) => {
  const navigate = useNavigate();

  return (
    <section className="caculate-area container">
      <Row className="calculate_wrapper" gutter={24}>
        <Col span={24} lg={12} xl={14}>
          <div className="section-title">
            <div className="section-text">
              <h5>make a call</h5>
              <h1>{serviceData[0]["makeCall"].title}</h1>
              <p>{serviceData[0]["makeCall"].desc}</p>
            </div>
          </div>
          <div className="section-button-appointment">
            <a onClick={() => navigate("/")} className="btn-icon">
              <span>+</span>
              Make Appointment
            </a>
          </div>
        </Col>
        <Col span={24} lg={12} xl={10}>
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
    </section>
  );
};

export default DepartmentContact;
