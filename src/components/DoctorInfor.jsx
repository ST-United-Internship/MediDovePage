import { Col, Row } from "antd";
import "../assets/css/DoctorInfor.css";
import CountUp from "react-countup";

const DoctorInfor = () => {
  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        <Row justify={"center"}>
          <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 18 }}>
            <div className="singer-counter">
              <img
                src="https://medi-dove.netlify.app/img/counter/counter-icon-1.png"
                alt=""
              />
              <div className="counter-text-box">
                <h1>
                  <span className="counter">
                    <span>
                      <CountUp end={358} duration={8} />
                    </span>
                  </span>
                  +
                </h1>
                <h3>Worldwide Branches</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 18 }}>
            <div className="singer-counter">
              <img
                src="https://medi-dove.netlify.app/img/counter/counter-icon-2.png"
                alt=""
              />
              <div className="counter-text-box">
                <h1>
                  <span className="counter">
                    <span>
                      <CountUp end={358} duration={8} />
                    </span>
                  </span>
                  +
                </h1>
                <h3>Hospital Formed</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 16 }} sm={{ span: 18 }}>
            <div className="singer-counter">
              <img
                src="https://medi-dove.netlify.app/img/counter/counter-icon-3.png"
                alt=""
              />
              <div className="counter-text-box">
                <h1>
                  <span className="counter">
                    <span>
                      <CountUp end={238} duration={8} />
                    </span>
                  </span>
                  +
                </h1>
                <h3>Local Partners</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DoctorInfor;
