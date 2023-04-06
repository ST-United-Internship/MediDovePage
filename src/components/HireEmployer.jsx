import { Col, Row } from "antd";
import "../assets/css/hireemployer.css";
export default function HireEmployer() {
  return (
    <div className="hire-employer-container">
      <Row className="hire-employer">
        <Col span={24} lg={12} className="hire-img">
          <img src="https://medi-dove.netlify.app/img/hire/hire1.jpg"></img>
        </Col>
        <Col span={24} lg={12} className="hire-text">
          <h1>For Employers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a>
            <span>+</span>
            contact us
          </a>
        </Col>
      </Row>
      <Row className="hire-employer reverse">
        <Col span={24} lg={12} className="hire-img">
          <img src="https://medi-dove.netlify.app/img/hire/hire2.jpg"></img>
        </Col>
        <Col span={24} lg={12} className="hire-text">
          <h1>For Employers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a>
            <span>+</span>
            apply today
          </a>
        </Col>
      </Row>
    </div>
  );
}
