import { Col, Row } from "antd";
import "../assets/css/DepartmentHealth.css";

const DepartmentHealth = ({ Department }) => {
  return (
    <div className="department-health container">
      <Row gutter={[16, 16]} className="icon-wrap">
        <Col
          lg={12}
          className="header-container"
          style={{ textAlign: "center" }}
        >
          <div className="img-icon">
            <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
          </div>

          <div className="wrap-title">
            <h5>HEALTH CARE FACILITY</h5>
            <h1>
              Would you rather stay at home than go into a health care facility?
            </h1>
          </div>
        </Col>
        <Col lg={12} className="wrap-container">
          <div className="wrap-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </div>
        </Col>
      </Row>

      <Row gutter={24} className="grap-container">
        {Department.map((items, index) => {
          return (
            <Col
              span={24}
              md={12}
              xl={8}
              className="item-container"
              key={index}
            >
              <div className="list-item">
                <img src={items.img} />
                <h2>{items.title}</h2>
                <p>{items.des}</p>
                <a>Read more</a>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DepartmentHealth;
