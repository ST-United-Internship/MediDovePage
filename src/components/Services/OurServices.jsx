import { Col, Row } from "antd";
import "../../assets/css/services/common-container.css";
import "../../assets/css/services/our-services.css";

const OurServices = () => {
  return (
    <div className="container our-service-container">
      <Row wrap={true}>
        <Col xs={24} md={12} className="left-item">
          <h5>We are here for your care.</h5>

          <h1>Our Services</h1>
        </Col>
        <Col xs={24} md={12} className="right-item">
          <div className="menu-item">
            <p>Home</p>
            <p>Details</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurServices;
