import { Col, Row } from "antd";
import "../../assets/css/services/common-container.css";
import "../../assets/css/services/our-services.css";
import { useNavigate } from "react-router";

const OurServices = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container our-service-container">
      <Row wrap={true}>
        <Col xs={24} md={12} className="left-item">
          <h5>{props.content.title1}</h5>

          <h1>{props.content.title2}</h1>
        </Col>
        <Col xs={24} md={12} className="right-item">
          <div className="menu-item">
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Home
            </p>
            <p>{props.content.title3}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurServices;
